const promise = require("es6-promise");
import 'whatwg-fetch';
import appSettings from '../app.constants';
//import appConfig from '../app.config';
//import * as appUtils from './app-utils';

module.exports = {
    post: function (resourceUrl, params, user) {
        let Promise = promise.Promise;
        let doctorCompanyId = 0;
        let token = '';
        let signature = '';

        if (user !== null && user !== undefined) {
          doctorCompanyId = user.doctorCompanyId;
          token = user.token;
          signature = user.signature;
          params.loggedInCompanyId = user.doctorCompanyId;
        }
        params.Token = token;
        params.Signature = signature;

        //For node api
        params.token = token;
        params.signature = signature;

        //Prepare Headers
        let myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        if (resourceUrl.indexOf('EHRV8ExtnAPIServices') > 0) {          
          myHeaders.append('RequestInfo', 'TestUser#TestPass#' + doctorCompanyId + '#' + signature + '#' + token);
        } else {
          myHeaders.append('RequestInfo', 'TestUser#TestPassword#' + doctorCompanyId + '#' + signature + '#' + token);
        }
        return new Promise(function (resolve, reject) {
          fetch(resourceUrl, {
            credentials: 'same-origin',
            method: 'post',
            headers: myHeaders,
            body: JSON.stringify(params)
          })
          .then(checkStatus)
          .then(function (response) {
            resolve(response.json());
          })
          .catch(function (err) {
            reject(err);
          });
        });
    },
    logError: function (resourceUrl, params, error, user) {
        let Promise = promise.Promise;
        let doctorCompanyId = 0;
        let token = '';
        let signature = '';

        if (user !== null && user !== undefined) {
          doctorCompanyId = user.DoctorCompanyId;
          token = user.Token;
          signature = user.signature;
        }

        const exceptionRequest = {
          DoctorCompanyId:params.doctorCompanyId,
          LoggedInUserId: params.appLoginId,
          OwnerType: params.ownerType,
          PrimaryKey: params.primaryKey,
          Application: 'PMV2',
          MessageType: "Error",
          Message: error.statusText,
          StackTrace: error.stack,
          Signature:signature,
          Token: token,
          //HostedIP: appConfig.HostedIP,
          // Browser: appUtils.getBrowser(),
          // Device: appUtils.getDevice()
        };

        //Prepare Headers
        let myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        myHeaders.append('RequestInfo', 'TestUser#TestPass#' + doctorCompanyId + '#' + signature + '#' + token);

        return new Promise(function (resolve, reject) {
          fetch(resourceUrl, {
            credentials: 'same-origin',
            method: 'post',
            headers: myHeaders,
            body: JSON.stringify(exceptionRequest)
          })
          .then(checkStatus)
          .then(function (response) {
            resolve(response.json());
          })
          .catch(function (err) {
            reject(err);
          });
        });
    }
};

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } 
  // else if(response.status === 401) {
  //   window.location = appConfig.PMV2LoginUrl;
  // } 
  else {
    let error = {};
    error.ValidationMessages = [appSettings.Messages.ExceptionMessage];
    throw error;
  }
}
