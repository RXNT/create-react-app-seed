import React, { Component } from 'react';
import PatientListComponent from "../../components/patient-list/patient-list-component";
import { connect} from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as patientListActions  from './actions';


class PatientList extends React.Component {
    constructor(props) {
            super(props);
    }
    
    componentWillMount() {
        this.getPatientList()
    }

    async getPatientList() {
        var { getPatientsList } = this.props.actions;
        const resp = await getPatientsList();
    }

    render() {
        var {  routerProps, patientList } = this.props;
        return (
            <PatientListComponent
                data = { patientList }
                routerProps = { routerProps }
            />
        )
    }
}

function mapDispatchToProps(dispatch) {
 return {
      actions: bindActionCreators(patientListActions, dispatch)
    };
}

function mapStateToProps(store) {
    return{
        email: store.loginReducer.email,
        patientList: store.patientListReducer.patientList
    }
}

PatientList.propTypes = {
    actions: PropTypes.func.isRequired,
    patientList: PropTypes.array,
    routerProps: PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(PatientList);
