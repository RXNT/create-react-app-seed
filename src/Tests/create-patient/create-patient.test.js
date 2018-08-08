
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
// import fetchMock from 'fetch-mock'
//import expect from 'expect' 
// import CreatePatient from '../../containers/create-patient/create-patient-container';
// import * as actions from '../../containers/create-patient/actions';
// import * as types from '../../containers/create-patient/constants';
import createPatientReducer from '../../containers/create-patient/reducer';
import initialStates from '../../containers/create-patient/initialState';
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)


describe('Create Patient Reducer', () => {
    it('should return the initial state', () => {
      expect(createPatientReducer(initialStates, {})).toEqual(
        {
            firstName: "",
            middleName: "",
            placeOfService: "",
            dateOfBirth: "",
            address1: "",
            zip: "",
            city: "",
            state: "",
            chartId: "",
            externalPatientId: "",
            martialStatus: "",
            employmentStatus: "",
            ethnicity: "",
            preferredLanguage: "",
            referredByPhysician: "",
            referringProvider: "",
            dateReferred: "",
            referringProviderCheckStatus : true,
            prefferedPhone :  "",
            homePhone :  "",
            workPhone :  "",
            cellPhone :   "",
            otherPhone :  "",
            email :   "",
            emergencyName :   "",
            emergencyRelationship :   "",
            emergencyPhoneNumber :   "",
            emergencyName2 :   "",
            emergencyRelationship2 :   "",
            patientTimeZone :   "",
            communicationPreferenceCall :  "",
            communicationPreferenceEmail :  "",
            communicationPreferenceSms :  "",
            allowSaturdayCommunication : "",
            allowSundayCommunication :   "",
        }
      )
    })
})
