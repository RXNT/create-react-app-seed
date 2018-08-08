import { combineReducers } from 'redux';
import createPatientReducer from '../containers/create-patient/reducer';
import loginReducer from '../containers/login/reducer';
import patientListReducer from '../containers/patient-list/reducer' ;

export default combineReducers({
    createPatientReducer,
    loginReducer,
    patientListReducer
})