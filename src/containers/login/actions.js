import * as types from './constants';
import 'reactjs-toastr/lib/toast.css';
import fetch from 'isomorphic-fetch';

//import  apiProxy from '../../utils/api-service.proxy';

export  function onChangeHandler(event) {
    let value = {};
    value[event.target.id] = event.target.value;
  return function(dispatch, getState) {
        dispatch({
          type : types.ONCHANGE_HANDLER,
          email: value && value.email ? value.email : getState().loginReducer.email ? getState().loginReducer.email : "",
          password: value && value.password ? value.password : getState().loginReducer.password ? getState().loginReducer.password : ""
        })
    }
  }

  export  function onLogin(requestModel) {
    //console.log('requestModel', requestModel)
      let options =  {
          method: 'POST',
          headers: {
            'Accept': 'application/json, text/plain, */*',
           'Content-Type' : 'application/json'
          },
          body : JSON.stringify(requestModel)
        }
  return  function(dispatch, getState) {
         return fetch(`http://localhost:5000/login`, options)
        .then(res => res.json())
        .then(response => {
          if(response && response.result && response.result.ok) {
            dispatch({
              type : types.ONCHANGE_HANDLER,
              email: response && response.ops[0].email ? response.ops[0].email : getState().loginReducer.email ? getState().loginReducer.email : "",
              password: response && response.ops[0].password ? response.ops[0].password : getState().loginReducer.password ? getState().loginReducer.password : "",
            });
          }
        }).catch(ex => console.error(ex))
    }
  }
