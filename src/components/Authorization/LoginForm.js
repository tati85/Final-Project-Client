import React from "react";
import { Link, withRouter } from "react-router-dom";

import {
    MDBIcon,
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBInput,

} from "mdbreact";
import { connect } from 'react-redux';
import { loginUser } from "../../actions/authActions";
import PropTypes from "prop-types";
// import classnames from "classnames";

class LoginForm extends React.Component {
    state = {
        email: "",
        password: "",
        errors: {}
    }
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    };
    onSubmit = e => {
        e.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password
        };
        this.props.loginUser(userData);
    };
    handleToggleActive = () => {
        this.props.onClickLogin();
        console.log("inside handle togglective in login form*********************")
    };

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
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
LoginForm.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,


}

const mapStateToProps = state => ({
    auth: state.auth

})

export default connect(mapStateToProps, { loginUser })(withRouter(LoginForm));


