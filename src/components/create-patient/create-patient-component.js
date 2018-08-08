import React, { Component } from 'react';
import {Form, Grid, Row , Col , Clearfix ,FieldGroup ,Checkbox ,
    Radio, ControlLabel ,Button ,FormGroup,FormControl,
    ButtonToolbar,MenuItem,DropdownButton,Modal,
    OverlayTrigger,Popover, Tooltip} from 'react-bootstrap'
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import RxntModal from '../../Modals/rxnt-modal';

export default class CreatePatientComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            show: false
        }
    }

    componentWillMount() {
        console.log('this.props', this.props)
    }
    handleDateChange(prop, date) {
        var { handleDateSelections } = this.props;
        let dates =  date ;
        handleDateSelections(dates._d, prop)
    }

    handleDropdownChange(prop, zone ,value) {
        var { handleSelectChange } = this.props;
        handleSelectChange(zone, prop, value)
    }
    handleRadioChange(prop, value) {
        var { handleRadioChange } = this.props;
        handleRadioChange(prop, value)
    }
    handleSubmit(prop, value) {
        var { handleSubmit } = this.props;
        handleSubmit(prop, value)
    }
    handleCheckbox(prop, value) {
        var { handleCheckboxChange } = this.props;
        handleCheckboxChange(prop, value)
    }
    handleShow(prop,value) {
        var { handleShow } = this.props;
        handleShow(prop,value)
    }
    handleClose(prop,value) {
        var { handleClose } = this.props;
        handleClose(prop,value)
    }

    render() {
        const cityList = [{id :1, name :"New York"},
            {id :2, name :"Los Angeles"},
            {id :2, name :"Chicago"},
            {id :4, name :"Houston"},{id :1, name :"Phoenix"},
            {id :5, name : "Philadelphia",},
            {id :6, name :"San Antonio."},
            {id :7, name :"San Diego"},
            {id :8, name :"New York"},

        ]
        const stateList = [
            {id :2, name :"Alabama"},
            {id :2, name :"Alaska"},
            {id :2, name :"American Samoa"},

        ]
        let that = this;
        var {handleSubmit, handleBlur, handleDateChange, handleDropdownChange,dateOfBirth,
            dateReferred ,city, cityName ,state, stateName, handleRadioChange,
            handleCheckboxChange ,referringProviderCheckStatus,handleClose,handleShow,
            show ,hide} = this.props;
        let communicationPreferenceCall = this.props.communicationPreferenceCall ? JSON.parse(this.props.communicationPreferenceCall) : "true"
        let communicationPreferenceEmail = this.props.communicationPreferenceEmail ? JSON.parse(this.props.communicationPreferenceEmail) : "true"
        let communicationPreferenceSms = this.props.communicationPreferenceSms ? JSON.parse(this.props.communicationPreferenceSms) : "true"
        let allowSaturdayCommunication = this.props.allowSaturdayCommunication ? JSON.parse(this.props.allowSaturdayCommunication) : "true"
        let allowSundayCommunication = this.props.allowSundayCommunication ?  JSON.parse(this.props.allowSundayCommunication) : "true"
        return (
            //<div> Hi </div>
            <Form className="tab-content" horizontal onSubmit={handleSubmit}>
                <Grid>
                    <Row className="show-grid tab-content">
                        <Col lg={12} sm={12} md={12} xs={12} >
                            <br />
                            <div id="mainView">
                                <div>
                                    <FormGroup >
                                        <Col componentClass={ControlLabel} lg={2} sm={2} md={2} xs={2} >
                                            <font color="#035D84">Patient Profile</font>
                                        </Col>
                                        <Col componentClass={ControlLabel} lg={2} sm={2} md={2} xs={2} >
                                            Account /MRN :  <font color="#035D84" >New</font>
                                        </Col>
                                    </FormGroup>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Grid>
                <Grid>
                    <Row className="show-grid tab-content">
                        <Col lg={3} sm={3} md={3} xs={3} >
                            <br />
                            <div id="mainView">
                                <div>
                                    <FormGroup >
                                        <Col componentClass={ControlLabel} lg={6} sm={6} md={6} xs={6} >
                                            First Name
                                            <font color="red" className="ng-scope">*</font>
                                        </Col>
                                        <Col  lg={6} sm={6} md={6} xs={6}>
                                            <FormControl type="text" placeholder=""   onBlur={handleBlur} name="firstName" required="required"/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup >
                                        <Col componentClass={ControlLabel} lg={6} sm={6} md={6} xs={6} >
                                            Middle Name
                                            <font color="red" className="ng-scope">*</font>
                                        </Col>
                                        <Col  lg={6} sm={6} md={6} xs={6}>
                                            <FormControl type="text" placeholder=""  onBlur={handleBlur} name="middleName" required="required"/>
                                        </Col>
                                    </FormGroup>

                                    <FormGroup >
                                        <Col componentClass={ControlLabel} lg={6} sm={6} md={6} xs={6} >
                                            Last Name
                                            <font color="red" className="ng-scope">*</font>
                                        </Col>
                                        <Col  lg={6} sm={6} md={6} xs={6}>
                                            <FormControl type="text" placeholder=""  onBlur={handleBlur} name="lastName" required="required"/>
                                        </Col>
                                    </FormGroup>

                                    <FormGroup >
                                        <Col componentClass={ControlLabel} lg={6} sm={6} md={6} xs={6} >
                                            Place of Service
                                            <font color="red" className="ng-scope">*</font>
                                        </Col>
                                        <Col  lg={6} sm={6} md={6} xs={6}>
                                            <FormControl type="text" placeholder=""  onBlur={handleBlur}  name="placeOfService"/>
                                        </Col>
                                    </FormGroup>

                                    <FormGroup >
                                        <Col componentClass={ControlLabel} id="dob" lg={6} sm={6} md={6} xs={6} >
                                            Date Of Birth
                                            <font color="red" >*</font>
                                        </Col>

                                        <Col componentClass={ControlLabel} id="dob" lg={6} sm={6} md={6} xs={6} >
                                            <DatePicker
                                                onChange={this.handleDateChange.bind(this, "dateOfBirth")}
                                                value={ dateOfBirth ? new moment(dateOfBirth).format('DD-MM-YYYY'): '' }
                                                maxDate ={moment()}
                                                placeholderText="DD/MM/YYYY"
                                            />
                                        </Col>

                                    </FormGroup>

                                    <FormGroup >
                                        <Col componentClass={ControlLabel}  lg={6} sm={6} md={6} xs={6} >
                                            Address 1
                                            <font color="red" >*</font>
                                        </Col>
                                        <Col  lg={6} sm={6} md={6} xs={6}>
                                            <FormControl type="text" placeholder=""  onBlur={handleBlur} name="address1"/>
                                        </Col>
                                    </FormGroup>

                                    <FormGroup >
                                        <Col componentClass={ControlLabel} lg={6} sm={6} md={6} xs={6} >
                                            Address 2
                                        </Col>
                                        <Col  lg={6} sm={6} md={6} xs={6}>
                                            <FormControl type="text" placeholder=""  onBlur={handleBlur} name="address2"/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup >
                                        <Col componentClass={ControlLabel} lg={6} sm={6} md={6} xs={6} >
                                            Zip
                                            <font color="red" >*</font>
                                        </Col>
                                        <Col  lg={6} sm={6} md={6} xs={6}>
                                            <FormControl type="text" placeholder=""  onBlur={handleBlur} name="zip"/>
                                        </Col>
                                    </FormGroup>

                                    <FormGroup >
                                        <Col componentClass={ControlLabel} lg={6} sm={6} md={6} xs={6} >
                                            City
                                            <font color="red" >*</font>
                                        </Col>
                                        <Col  lg={6} sm={6} md={6} xs={6}>
                                            <ButtonToolbar>
                                            <DropdownButton title={cityName ? cityName : "Select"} value={cityName} id="dropdown-custom-menu"  >
                                                    {
                                                        cityList.map(function (info, i) {
                                                        return (
                                                            <MenuItem key={i}
                                                              value={info.name}
                                                                onSelect={handleDropdownChange.bind(this,"city", i,info.name)}>
                                                                {info.name}
                                                            </MenuItem>
                                                        )
                                                    })
                                                    }
                                                </DropdownButton>
                                            </ButtonToolbar>
                                        </Col>
                                    </FormGroup>

                                    <FormGroup >
                                        <Col componentClass={ControlLabel} lg={6} sm={6} md={6} xs={6} >
                                            State
                                            <font color="red" className="ng-scope">*</font>
                                        </Col>
                                        <Col  lg={6} sm={6} md={6} xs={6}>
                                            <ButtonToolbar>
                                                <DropdownButton title={stateName ? stateName : "Select"} value={stateName} id="dropdown-custom-State" >
                                                    {
                                                        stateList.map(function (info, i) {
                                                            return (
                                                                <MenuItem key={i}
                                                                          value={info.name}
                                                                          onSelect={handleDropdownChange.bind(this,"state", i,info.name)}>
                                                                    {info.name}
                                                                </MenuItem>
                                                            )
                                                        })
                                                    }
                                                </DropdownButton>
                                            </ButtonToolbar>
                                        </Col>
                                    </FormGroup>

                                </div>
                            </div>
                        </Col>
                        <Col  lg={3} sm={3} md={3} xs={3} >
                            <br />
                            <div id="mainView">
                                <div>
                                    <FormGroup >
                                        <Col componentClass={ControlLabel} lg={6} sm={6} md={6} xs={6} >
                                            Chart #
                                            <font color="red" >*</font>
                                        </Col>
                                        <Col  lg={6} sm={6} md={6} xs={6}>
                                            <FormControl type="text" placeholder=""  mandatory="true" onBlur={handleBlur} name="chartId"/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup >
                                        <Col componentClass={ControlLabel} lg={6} sm={6} md={6} xs={6} >
                                            External patient

                                        </Col>
                                        <Col  lg={6} sm={6} md={6} xs={6}>
                                            <FormControl type="text" placeholder="" disabled= {true} onBlur={handleBlur} name="externalPatientId"/>
                                        </Col>
                                    </FormGroup>

                                    <FormGroup >
                                        <Col componentClass={ControlLabel} lg={6} sm={6} md={6} xs={6} >
                                            SSN
                                            <font color="red" >*</font>
                                        </Col>
                                        <Col  lg={6} sm={6} md={6} xs={6}>
                                            <FormControl type="text" placeholder=""  onBlur={handleBlur} name="ssn"/>
                                        </Col>
                                    </FormGroup>

                                    <FormGroup >
                                        <Col componentClass={ControlLabel} lg={6} sm={6} md={6} xs={6} >
                                            Sex
                                            <font color="red" >*</font>
                                        </Col>
                                        <Col  lg={6} sm={6} md={6} xs={6} >
                                            <Radio name="radioGroup" className="pull-left" style={{"marginLeft" : "0px" }} inline
                                                   onClick={handleRadioChange.bind(this,"sex","male")}
                                                >
                                                Male
                                            </Radio>{' '}
                                            <Radio name="radioGroup" className="pull-left" style={{"marginLeft" : "0px" }} inline
                                                   onClick={handleRadioChange.bind(this,"sex","female")}
                                            >

                                               Female
                                            </Radio>{' '}
                                            <Radio name="radioGroup" className="pull-left" style={{"marginLeft" : "0px" }} inline
                                                   onClick={handleRadioChange.bind(this,"sex","unspecified")}
                                            >
                                               Unspecified
                                            </Radio>
                                        </Col>
                                    </FormGroup>

                                 {/*   <FormGroup >
                                        <Col componentClass={ControlLabel} lg={6} sm={6} md={6} xs={6} >
                                            Martial Status
                                        </Col>
                                        <Col lg={6} sm={6} md={6} xs={6}>

                                        </Col>
                                    </FormGroup>*/}
                                    <FormGroup >
                                        <Col componentClass={ControlLabel}  lg={6} sm={6} md={6} xs={6} >
                                            Employment Status
                                            <font color="red" >*</font>
                                        </Col>
                                        <Col  lg={6} sm={6} md={6} xs={6}>
                                            <FormControl type="text" placeholder=""  onBlur={handleBlur}  name="employmentStatus"/>
                                        </Col>
                                    </FormGroup>

                                    <FormGroup >
                                        <Col componentClass={ControlLabel} lg={6} sm={6} md={6} xs={6} >
                                            Ethnicity
                                            <font color="red" >*</font>
                                        </Col>
                                        <Col  lg={6} sm={6} md={6} xs={6}>
                                            <FormControl type="text" placeholder=""  onBlur={handleBlur} name="ethnicity"/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup >
                                            <Col componentClass={ControlLabel} lg={6} sm={6} md={6} xs={6} >
                                            Preferred Language
                                        </Col>
                                        <Col  lg={6} sm={6} md={6} xs={6}>
                                            <FormControl type="text" placeholder=""  onBlur={handleBlur} name="preferredLanguage"/>
                                        </Col>
                                    </FormGroup>
                                  {/*  <FormGroup >
                                        <div  >
                                        <font color="#8f0404" > <b>REFERRING PHYSICIAN INFORMATION *</b> </font>
                                        </div>
                                    </FormGroup>
                                    <FormGroup>
                                        <Col  componentClass={ControlLabel} lg={12} sm={12} md={12} xs={12} bsSize="large">
                                            <Checkbox className="" checked={referringProviderCheckStatus ?  "true" :"false"  } onChange={ e => this.handleCheckbox("referringProviderCheckStatus",e.target.checked)} name="referringProviderCheckStatus">  Patient was referred by Physician </Checkbox>
                                        </Col>
                                    </FormGroup>*/}
                                    <FormGroup >
                                        <Col componentClass={ControlLabel} lg={3} sm={3} md={3} xs={3} >
                                            Referring Provider
                                        </Col>
                                        <Col  lg={5} sm={5} md={5} xs={5}>
                                            <FormControl type="text" placeholder=""  onBlur={handleBlur}  name="referringProvider"/>
                                        </Col>
                                        <Col  lg={2} sm={2} md={2} xs={2}>
                                            <button type="button" className="btn btn-success btn-circle btn-lg"  onClick={handleShow.bind(this,true)}><i className="glyphicon glyphicon-plus"></i></button>
                                           <RxntModal
                                               handleClose ={this.handleClose.bind(this)}
                                               handleShow ={this.handleShow.bind(this)}
                                                 show = {show}
                                                 hide ={hide}
                                           />
                                        </Col>
                                        <Col  lg={2} sm={2} md={2} xs={2}>
                                            <button type="button" className="btn btn-warning btn-circle btn-lg"><i className="glyphicon glyphicon-folder-open"></i></button>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup >
                                        <Col componentClass={ControlLabel} lg={6} sm={6} md={6} xs={6} >
                                            Date Referred
                                        </Col>
                                        <Col componentClass={ControlLabel} lg={6} sm={6} md={6} xs={6} >

                                            <DatePicker
                                                onChange={this.handleDateChange.bind(this, "dateReferred")}
                                                value={ dateReferred ? new moment(dateReferred).format('DD-MM-YYYY') : '' }
                                            />
                                        </Col>
                                    </FormGroup>
                                </div>
                            </div>
                        </Col>
                        <Col  lg={3} sm={3} md={3} xs={3} >
                            <br />
                            <div id="mainView">
                                <div>
                                    <FormGroup >
                                        <Col componentClass={ControlLabel} lg={6} sm={6} md={6} xs={6} >
                                            Preferred Phone
                                            <font color="red" >*</font>
                                        </Col>
                                        <Col  lg={6} sm={6} md={6} xs={6}>
                                            <FormControl type="text" placeholder=""   onBlur={handleBlur}  name="prefferedPhone"/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup >
                                        <Col componentClass={ControlLabel} lg={6} sm={6} md={6} xs={6} >
                                            Home Phone:
                                            <font color="red" >*</font>
                                        </Col>
                                        <Col  lg={6} sm={6} md={6} xs={6}>
                                            <FormControl type="text" placeholder=""   onBlur={handleBlur}  name="homePhone"/>
                                        </Col>
                                    </FormGroup>

                                    <FormGroup >
                                        <Col componentClass={ControlLabel} lg={6} sm={6} md={6} xs={6} >
                                            Work Phone
                                        </Col>
                                        <Col  lg={6} sm={6} md={6} xs={6}>
                                            <FormControl type="text" placeholder=""  onBlur={handleBlur}  name="workPhone"/>
                                        </Col>
                                    </FormGroup>

                                    <FormGroup >
                                        <Col componentClass={ControlLabel} lg={6} sm={6} md={6} xs={46} >
                                            Cell Phone
                                        </Col>
                                        <Col  lg={6} sm={6} md={6} xs={6}>
                                            <FormControl type="text" placeholder=""  onBlur={handleBlur}  name="cellPhone"/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup >
                                        <Col componentClass={ControlLabel} lg={6} sm={6} md={6} xs={6} >
                                            Other Phone
                                        </Col>
                                        <Col  lg={6} sm={6} md={6} xs={6}>
                                            <FormControl type="text" placeholder=""  onBlur={handleBlur}  name="otherPhone"/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup >
                                        <Col componentClass={ControlLabel} lg={6} sm={6} md={6} xs={6} >
                                            Email
                                            <font color="red" >*</font>
                                        </Col>
                                        <Col  lg={6} sm={6} md={6} xs={6}>
                                            <FormControl type="text" placeholder=""  onBlur={handleBlur}  name="email"/>
                                        </Col>
                                    </FormGroup>

                                    <div>

                                        <font color="#c29306" >  <b> EMERGENCY CONTACT - PRIMARY </b></font>

                                    </div>
                                    <br/>

                                    <FormGroup >
                                        <Col componentClass={ControlLabel}  lg={6} sm={6} md={6} xs={6} >
                                         Name
                                        </Col>
                                        <Col  lg={6} sm={6} md={6} xs={6}>
                                            <FormControl type="text" placeholder=""   onBlur={handleBlur}  name="emergencyName"/>
                                        </Col>
                                    </FormGroup>

                                    <FormGroup >
                                         <Col componentClass={ControlLabel} lg={6} sm={6} md={6} xs={6} >
                                             Relationship
                                        </Col>
                                        <Col  lg={6} sm={6} md={6} xs={6}>
                                            <FormControl type="text" placeholder=""  onBlur={handleBlur}  name="emergencyRelationship"/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup >
                                        <Col componentClass={ControlLabel} lg={6} sm={6} md={6} xs={6} >
                                           Phone Number
                                        </Col>
                                        <Col  lg={6} sm={6} md={6} xs={6}>
                                            <FormControl placeholder="" type="number"   onBlur={handleBlur}  name="emergencyPhoneNumber"/>
                                        </Col>
                                    </FormGroup>
                                </div>
                            </div>
                        </Col>
                        <Col  lg={3} sm={3} md={3} xs={3} >
                            <br />
                            <div id="mainView">
                                <div>
                                    <div>
                                        <font color="#04896a" > <b> EMERGENCY CONTACT-SECONDARY </b> </font>
                                    </div>
                                    <br/>

                                    <FormGroup >
                                        <Col componentClass={ControlLabel}  lg={6} sm={6} md={6} xs={6} >
                                            Name
                                        </Col>
                                        <Col  lg={6} sm={6} md={6} xs={6}>
                                            <FormControl type="text" placeholder=""   onBlur={handleBlur}  name="emergencyName2"/>
                                        </Col>
                                    </FormGroup>

                                    <FormGroup >
                                        <Col componentClass={ControlLabel} lg={6} sm={6} md={6} xs={6} >
                                            Relationship
                                        </Col>
                                        <Col  lg={6} sm={6} md={6} xs={6}>
                                            <FormControl type="text" placeholder=""  onBlur={handleBlur}  name="emergencyRelationship2"/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup >
                                        <Col componentClass={ControlLabel} lg={6} sm={6} md={6} xs={6} >
                                            Phone Number
                                        </Col>
                                        <Col  lg={6} sm={6} md={6} xs={6}>
                                            <FormControl placeholder="" type="number"  onBlur={handleBlur}  name="patientTimeZone"/>
                                        </Col>
                                    </FormGroup>
                                    <div>
                                        <font color="#04896a" > <b> COMMUNICATION PREFERENCES </b> </font>
                                    </div>
                                    <br/>
                                    <FormGroup>
                                        <Col  componentClass={ControlLabel} lg={12} sm={12} md={12} xs={12} bsSize="large">
                                            <Checkbox className="" checked={ communicationPreferenceCall  } onChange={ e => this.handleCheckbox("communicationPreferenceCall",e.target.checked.toString())} name="communicationPreferenceCall" className="pull-left" >Call</Checkbox>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup>
                                        <Col  componentClass={ControlLabel} lg={12} sm={12} md={12} xs={12} bsSize="large">
                                            <Checkbox className="" checked={communicationPreferenceEmail   } onChange={ e => this.handleCheckbox("communicationPreferenceEmail",e.target.checked.toString())} name="communicationPreferenceEmail"  name="referringProviderCemailheckStatus" className="pull-left"  >  Email </Checkbox>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup>
                                        <Col  componentClass={ControlLabel} lg={12} sm={12} md={12} xs={12} bsSize="large">
                                            <Checkbox className="" checked={communicationPreferenceSms   } onChange={ e => this.handleCheckbox("communicationPreferenceSms",e.target.checked.toString())} name="communicationPreferenceSms" name="sms"className="pull-left"> SMS</Checkbox>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup>
                                    <Col  componentClass={ControlLabel} lg={12} sm={12} md={12} xs={12} bsSize="large">
                                        <Checkbox className="" checked={allowSaturdayCommunication  } onChange={ e => this.handleCheckbox("allowSaturdayCommunication",e.target.checked.toString())} name="allowSaturdayCommunication" className="pull-left">  Allow Saturday Communication </Checkbox>
                                    </Col>
                                </FormGroup>
                                <FormGroup>
                                    <Col  componentClass={ControlLabel} lg={12} sm={12} md={12} xs={12} bsSize="large">
                                        <Checkbox className="" checked={allowSundayCommunication  } onChange={ e => this.handleCheckbox("allowSundayCommunication",e.target.checked.toString())} name="allowSundayCommunication" name="sundayCommunication" className="pull-left">  Allow Sunday Communication </Checkbox>
                                    </Col>
                                </FormGroup>
                                <FormGroup >
                                    <Col componentClass={ControlLabel} lg={6} sm={6} md={6} xs={6} >
                                        Patient Time Zone
                                    </Col>
                                    <Col  lg={6} sm={6} md={6} xs={6}>
                                        <FormControl type="text" placeholder="" />
                                    </Col>
                                </FormGroup>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <div className="table" style={{marginTop :"10px"}}>
                        <div className="row marginTopNegativeClass">
                            <ButtonToolbar>
                                <Button bsStyle="danger" className="buttonTabText pull-right" onClick={()=> this.props.routerProps.history.push('/patientList') }>Cancel</Button>
                                <Button bsStyle="success" className="buttonTabText pull-right"  type="submit" >Save</Button>
                                <Button bsStyle="info" className="buttonTabText pull-right">Site Settings</Button>
                                <Button bsStyle="primary" className="buttonTabText pull-right">Notes</Button>
                                <Button className="buttonTabText pull-right" >   Face Sheet</Button>
                                <Button bsStyle="info" className="buttonTabText pull-right">Screen Settings</Button>
                            </ButtonToolbar>
                        </div>
                    </div>
                </Grid>
            </Form>
        )
    }
}