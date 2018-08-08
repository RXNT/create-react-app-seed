import * as types from './constants';
import initialState from './initialStates';

 export default function loginReducer(state = initialState, action = {}) {
    switch (action.type) {
        case types.ONCHANGE_HANDLER : 
        return {
            ...state,
            email: action.email,
            password: action.password,
            // toastrController: action.toastrController
        }
        default:
            return state;
    }
}
