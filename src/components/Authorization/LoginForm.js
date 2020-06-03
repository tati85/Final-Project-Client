import React from "react";
// import { bindActionCreators } from "redux";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import {
    MDBIcon,
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBInput,

} from "mdbreact";
import { connect } from 'react-redux';
import { loginUser } from "../../actions/authActions";
// import PropTypes from "prop-types";
// import classnames from "classnames";
//import ReactJoiValidations from 'react-joi-validation'
import Joi from '@hapi/joi'

//ReactJoiValidations.setJoi(Joi);

class LoginForm extends React.Component {
    state = {
        email: "",
        password: "",
        errors: {}
    }
    schema = Joi.object({
        email: Joi.string().email({ minDomainSegments: 2, tlds: ['com', 'net', 'es', 'org'] }).required().label('Email'),
        password: Joi.string().pattern(new RegExp('^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}')).required().label('Password')
    })
    myValidate = () => {
        //const options = { abortEarly: false };
        const account = { email: this.state.email, password: this.state.password }
        const { error } = this.schema.validate(account);
        if (!error) return null;
        const errors = {};
        for (let item of error.details) errors[item.path[0]] = item.message;
        return errors;
    }
    onChange = e => {

        this.setState({ [e.target.name]: e.target.value })
    };
    onSubmit = e => {
        e.preventDefault();
        const errors = this.myValidate();
        this.setState({ errors: errors || {} })
        if (errors) return;
        const userData = {
            email: this.state.email,
            password: this.state.password
        };
        // () => this.props.loginUserComponent(userData)
        //this.props.loginUser(userData);
    };
    handleToggleActive = () => {
        this.props.onClickLogin();

    };


    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.isAuthenticated) {
            this.props.history.push('/home')
        };
    }

    render() {
        // const { errors } = this.state;
        return (

            <div>
                <MDBCard id="classic-card">
                    <MDBCardBody className="white-text">
                        <form onSubmit={this.onSubmit} >
                            <h3 className="text-center">
                                <MDBIcon icon="user" />
                                Login
                           </h3>
                            <hr className="hr-light" />

                            <MDBInput
                                className='white-text'
                                iconClass="white-text"
                                label="Your email"
                                icon="envelope"
                                value={this.state.email}
                                name="email"
                                group
                                type="email"
                                validate
                                success="right"
                                onChange={this.onChange}
                            />
                            {this.state.errors.email && <div className='alert alert-danger'>{this.state.errors.email}</div>
                            }

                            <MDBInput
                                className='white-text'
                                iconClass="white-text"
                                label="Your password"
                                icon="lock"
                                value={this.state.password}
                                name="password"
                                group
                                type="password"
                                validate
                                onChange={this.onChange}
                            />
                            {this.state.errors.password && <div className='alert alert-danger'>{this.state.errors.password}</div>}

                            <div className="text-center mt-4 black-text">
                                <MDBBtn color="indigo" type="submit">Login</MDBBtn>
                                <hr className="hr-light" />
                                <div className="text-center d-flex justify-content-center white-label">
                                    <h6 className="mb-4 white-text">Don't have an account?    </h6>
                                    <MDBBtn outline color="default-color" onClick={this.handleToggleActive}>Sing Up</MDBBtn>

                                </div>
                            </div>

                        </form>
                    </MDBCardBody>
                </MDBCard>
            </div>
        )
    }



}


const mapStateToProps = state => ({
    // user: state.auth.user,
    isAuthenticated: state.auth.isAuthenticated
});
// const mapDispatchToProps = dispatch => {
//     return {
//         loginUser: userData => dispatch(loginUser(userData))
//     }
// }
// console.log(loginUser + "**********loginuser");

const mapDispatchToProps = dispactch => ({
    loginUserComponent: (userData) => dispactch(loginUser(userData))
});



export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginForm));


