import React, { Component } from 'react';
import logo from '../src/containers/RxNT_Logo_White.png';
import '../src/containers/App.css';
import Login from './containers/login/login-container';
import CreatePatient from './containers/create-patient/create-patient-container';
import PatientList from './containers/patient-list/patient-list-container';
import UserRegistration from './containers/login/registration-container';
import {HashRouter, Route, Link, Redirect} from 'react-router-dom';


class App extends Component {
  constructor(props) {
		super(props);

	}
  render() {
    return (
      <HashRouter basename="/">
        <div>
            <div>
            <header className="App-header">
              <img src={logo} className="App-Header-Logo" alt="logo" />
            </header>
              <div>
                <Redirect to={'/login'} />
                <Route exact path="/login" render={(props) => ( <Login routerProps={props}/> )} />
                <Route exact path="/patientList" render={(props) => ( <PatientList routerProps={props}/> )} />
                <Route exact path="/createPatient" render={(props) => ( <CreatePatient routerProps={props}/> )} />
                <Route exacr path="/userRegistration" render={(props) => ( <UserRegistration routerProps={props}/> )} />
              </div>
            </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
