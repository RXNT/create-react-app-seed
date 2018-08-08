import React, { Component } from 'react';
import LoginComponent from "../../components/login/login-component";
import { connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as loginActions  from './actions';



class Login extends React.Component {
    constructor(props) {
		super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
	}
 
    handleChange = event => {
        var {onChangeHandler} = this.props.actions;
        onChangeHandler(event)
    }

     handleSubmit =  (event) => {
        var {onLogin} = this.props.actions;
        var {routerProps} = this.props;
        event.preventDefault();
        var requestObject ={};
        var length =  event.target.length; 
        for(var i = 0; i < length - 1; i++) requestObject[event.target[i].id] = event.target[i].value;
        onLogin(requestObject);
        routerProps.history.push('/patientList');
    }

    render() {
        var { email, password, routerProps, toastrController } = this.props;
        return (
            <LoginComponent
                validateForm={this.validateForm}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                handleAuthentication={this.handleAuthentication}
                password = { password }
                email = { email }
                toastrController = { toastrController }
                routerProps = { routerProps }
            />
        )
    }
}

function mapDispatchToProps(dispatch) {
 return {
      actions: bindActionCreators(loginActions, dispatch)
    };
}

function mapStateToProps(store) {
    return {
        email: store.loginReducer.email,
        password: store.loginReducer.password,
        toastrController:  store.loginReducer.toastrController
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
