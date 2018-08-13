import React, { Component } from "react";
import {  FormGroup, FormControl, ControlLabel, Button } from "react-bootstrap";
import "./Login.css";
// import toastr from 'reactjs-toastr';
// import 'reactjs-toastr/lib/toast.css';

export default class LoginComponent extends Component {
  constructor(props) {
    super(props);
  }

  handleRegistration() {
    this.props.routerProps.history.push('/userRegistration');
    console.log('Resgistration handled')
  }

  render() {
    var {handleSubmit, handleChange, toastrController } = this.props;
    //toastrController ? toastr.success('Logged Successfully') : toastr.error('Login falied')
    return (
      <div className="Login">
        <form onSubmit={handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
             // type="email"
              //value={this.state.email}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              //value={this.state.password}
              onChange={handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            className="btn btn-primary"
            bsSize="large"
            type="submit"
          >
            Login
          </Button>
          <Button
            block
            className="btn btn-secondary"
            bsSize="large"
            onClick={()=> this.handleRegistration()}
          >
            Register
          </Button>
        </form>
      </div>
    );
  }
}
