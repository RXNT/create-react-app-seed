import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import React, { Component } from 'react';
import fetchMock from 'fetch-mock'
import expect from 'expect' 
import PatientList  from '../../containers/patient-list/patient-list-container';
import * as actions from '../../containers/patient-list/actions';
import * as types from '../../containers/patient-list/constants';
import patientListReducer from '../../containers/patient-list/reducer';
import initialStates from '../../containers/patient-list/initialStates';
import PatientListComponent from '../../components/patient-list/patient-list-component'
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares);

/*------------------------------------------------------------------------------------------------------------------
    Testing for Connected Components..
------------------------------------------------------------------------------------------------------------------
const thunk = ({ dispatch, getState }) => next => action => {
  if (typeof action === 'function') {
    return action(dispatch, getState)
  }
  return next(action)
}

const create = () => {
  const store = {
    getState: jest.fn(() => ({})),
    dispatch: jest.fn(),
  };
  const next = jest.fn()
  const invoke = (action) => thunk(store)(next)(action)
  return {store, next, invoke}
};


it('passes through non-function action', () => {
  const { next, invoke } = create()
  const action = {type: 'TEST'}
  invoke(action)
  expect(next).toHaveBeenCalledWith(action)
})
it('calls the function', () => {
  const { invoke } = create()
  const fn = jest.fn()
  invoke(fn)
  expect(fn).toHaveBeenCalled()
});
it('passes dispatch and getState', () => {
  const { store, invoke } = create()
  invoke((dispatch, getState) => {
    dispatch('TEST DISPATCH')
    getState();
  })
  expect(store.dispatch).toHaveBeenCalledWith('TEST DISPATCH')
  expect(store.getState).toHaveBeenCalled()
});

------------------------------------------------------------------------------------------------------------ */
describe('Patient List Reducer', () => {
    it('should return the initial state', () => {
      expect(patientListReducer(initialStates, {})).toEqual({
            email: "",
            patientList: []
        }
      )
    });
});



describe('PATIENT-LIST API TESTING', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  })
let expectedResponse = [{ 
  type: 'ON_GETTING_PATIENTSLIST',
  patientList: [] 
}]
  it('Fetches all the patients List', async () => {
    fetchMock
      .getOnce('/getPatientList', { result: { ok: true }, headers: { 'content-type': 'application/json' } })
    const store = mockStore(initialStates);
     return await store.dispatch(actions.getPatientsList())
     .then(() => {
       let response = store.getActions();
       let lengthOfResponse = response.length;
       let patientList = response[0].patientList;
      // To check if any mandatory fields exists in the response.
      patientList.map(result => expect(result._id).toBeTruthy())
      // To check if the response is an object
      expect(typeof(response)).toBe('object');
      // To check if the response is Empty or not
      expect(lengthOfResponse).toBeGreaterThan(0);
      // To check if the reducer returns states correctly
      expect(patientListReducer(initialStates, ...response)).toEqual({
        email:"",
        patientList: patientList
      })
    });
  });
});


