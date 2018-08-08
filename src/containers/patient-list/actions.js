import * as types from './constants';
import fetch from 'isomorphic-fetch';


export function getPatientsList() {
    let options =  {
        method: 'GET',
    }
return  function(dispatch, getState) {
       return fetch(`http://localhost:5000/getPatientList`, options)
       .then(response=> response.json())
       .then(data => {
        dispatch({
          type : types.ON_GETTING_PATIENTSLIST,
          patientList: data
        });
      });
  }
}
