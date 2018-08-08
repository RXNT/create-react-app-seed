
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import Login from '../../containers/login/login-container';
import * as actions from '../../containers/login/actions';
import * as types from '../../containers/login/constants';
import loginReducer from '../../containers/login/reducer';
import initialStates from '../../containers/login/initialStates';
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

test('handleChange ', () => {
    const handleChange = Login.handleChange;
  expect(handleChange).toBeFalsy()
});

describe('Login Reducer', () => {
  it('Should Return the state values for email and password', () => {
    const action = {
      email: 'Mukhil',
      password: 'Mukhil@123',
      toastrController: true,
      type: 'ONCHANGE_HANDLER'
    }
    initialStates.email = action.email;
    initialStates.password = action.password;
    initialStates.toastrController = action.toastrController;
    const expectedAction = initialStates;
    expect(loginReducer(initialStates, action)).toEqual(expectedAction)
  })
});

describe('LOGIN API TESTING', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })
  var reqModel = {
    email : "Mukhil",
    password: "Mukhil@123",
  }
  it('Makes an Entry to the Logins DB', () => {
    fetchMock
      .getOnce('/login', { method: 'POST', body:  reqModel, headers: { 'Accept': 'application/json, text/plain, */*','Content-Type' : 'application/json' } })
    const expectedActions = [{ 
      type: types.ONCHANGE_HANDLER, 
      email: reqModel.email, 
      password: reqModel.password 
    }]
    let initObject = {
      email: "",
      password: ""
    };
    const store = mockStore(initObject);
    return store.dispatch(actions.onLogin(reqModel)).then(res => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
});

