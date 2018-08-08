import React, { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import PropTypes from 'prop-types';


export default class PatientListComponent extends Component {
    constructor(props) {
        super(props);
    }
    
    createCustomToolBar(props) {
        return (
            <div className='col-xs-12 col-sm-12 col-md-12 noPadding'>
                { props.components.btnGroup }
                <div className='col-xs-2 col-sm-2 col-md-2'>
                    { props.components.searchField }
                </div>
            </div>
        );
    }

    createPatient() {
        this.props.routerProps.history.push('/createPatient')
    }

    createCustomButtonGroup (props) {
        return (
        <div className="col-xs-4 col-sm-4 col-md-4 pull-right" style={{"text-align": "right"}}>
            <button type="button" className="btn btn-primary" onClick={(e)=>this.createPatient()}>Create Patient </button>
        </div>
        )
    }

    render() {
        var temp = this.props && this.props.data && this.props.data.length ? this.props.data : [{
            firstName: 'Mukhil',
            middleName: '',
            placeOfService:'Blore',
            address1: '',
            zip:560073,
            city: 'Banglore',
            state: 'Karnataka',
            chartId: 123
        }];

        const options = {
            toolBar: this.createCustomToolBar,
            saveText: 'my_save',
            printToolBar: false,
            noDataText: "No Data to be shown",
            paginationShowsTotal: true,
            btnGroup: this.createCustomButtonGroup.bind(this)
        };
        return(
            <div className="tab-content">
            <BootstrapTable
                tableHeaderClass='my-header-class'
                printable
                containerClass  = 'my_test'
                //containerStyle={{width: '150%'}} 
                headerContainerClass  = 'my_test'
                tableBodyClass='my-body-class'
                data = { temp }
                headerStyle = {{'width':'150%'}}
                tableStyle = {{'overflow-x': 'auto'}}
                options={ options }
                deleteRow
                keyField="id" 
                exportCSV
                pagination 
                ref='bsTable'
                striped={ true }
                searchPlaceholder = {"Search Here"} 
                search
                bodyStyle={{'width':'150%'}}
            >
            <TableHeaderColumn dataSort key={1}  thStyle={ { whiteSpace: 'normal','word-break': 'break-all'} } dataField='firstName' > First Name </TableHeaderColumn>
            <TableHeaderColumn dataSort        width="7%" tdStyle={ { whiteSpace: 'normal'} } thStyle={ { whiteSpace: 'normal','word-break': 'break-all'} }dataField='middleName'> Middle Name </TableHeaderColumn>
            <TableHeaderColumn dataSort       tdStyle={ { whiteSpace: 'normal' } } thStyle={ { whiteSpace: 'normal' } }dataField='placeOfService'> Place Of Service </TableHeaderColumn>
            <TableHeaderColumn dataSort        dataField='address1'> Address </TableHeaderColumn>
            <TableHeaderColumn dataSort       tdStyle={ { whiteSpace: 'normal' } } thStyle={ { whiteSpace: 'normal' } }dataField='zip'>Zip Code  </TableHeaderColumn>
            <TableHeaderColumn dataSort       dataField='city'> City </TableHeaderColumn>
            <TableHeaderColumn dataSort       dataField='state'> State </TableHeaderColumn>
            <TableHeaderColumn dataSort       thStyle={ { whiteSpace: 'normal','word-break': 'break-all'} }  dataField='chartId'> Chart # </TableHeaderColumn>
            <TableHeaderColumn dataSort       thStyle={ { whiteSpace: 'normal','word-break': 'break-all'} } dataField='externalPatientId'> Patient # </TableHeaderColumn>
            <TableHeaderColumn dataSort       dataField='ssn'> SSN # </TableHeaderColumn>
            <TableHeaderColumn dataSort       tdStyle={ { whiteSpace: 'normal' } } thStyle={ { whiteSpace: 'normal' } }dataField='martialStatus'> Martial Status </TableHeaderColumn>
            <TableHeaderColumn dataSort       width="4.5%"tdStyle={ { whiteSpace: 'normal' } } thStyle={ { whiteSpace: 'normal','word-break': 'break-all'  } }dataField='employmentStatus'> Employment Status </TableHeaderColumn>
            <TableHeaderColumn dataSort        tdStyle={ { whiteSpace: 'normal' } } thStyle={ { whiteSpace: 'normal','word-break': 'break-all'  } }dataField='ethnicity'> Ethinicity </TableHeaderColumn>
            <TableHeaderColumn dataSort       thStyle={ { whiteSpace: 'normal','word-break': 'break-all'} } dataField='preferredLanguage'> Language </TableHeaderColumn>
            <TableHeaderColumn dataSort       thStyle={ { whiteSpace: 'normal','word-break': 'break-all'} } dataField='referredByPhysician'> Physician </TableHeaderColumn>
            <TableHeaderColumn dataSort        width="9%" tdStyle={ { whiteSpace: 'normal' } } thStyle={ { whiteSpace: 'normal','word-break': 'break-all'  } }dataField='referringProvider'> Referring Provider </TableHeaderColumn>
            <TableHeaderColumn dataSort        tdStyle={ { whiteSpace: 'normal' } } thStyle={ { whiteSpace: 'normal','word-break': 'break-all'  } }dataField='dateReferred'> Date Referred </TableHeaderColumn>
        </BootstrapTable>
        </div>
      )
  }
}

PatientListComponent.propTypes = {
    data: PropTypes.array.isRequired,
    routerProps: PropTypes.object.isRequired
}