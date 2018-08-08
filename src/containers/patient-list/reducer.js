import * as types from './constants';
import initialState from './initialStates';

 export default function patientListReducer(state = initialState, action = {}) {
    switch (action.type) {
        case types.ON_GETTING_PATIENTSLIST : 
        return {
            ...state,
            patientList: action.patientList,
        }
        default:
            return state;
    }
}
