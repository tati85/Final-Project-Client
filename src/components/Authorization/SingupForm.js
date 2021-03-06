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
import { registerUser } from "../../actions/authActions";
import PropTypes from "prop-types";
import classnames from "classnames";



class SingupForm extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        errors: {}
    }
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    };
    onSubmit = e => {
        e.preventDefault();
        const newUser = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password
        }
        this.props.signupUser(newUser);
    };

    handleToggleActive = () => {
        this.props.onClickLogin();
    };

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.isAuthenticated) {
            this.props.history.push('/home')
        };

        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
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
                                            Singup
                                        </h3>
                            <hr className="hr-light" />
                            <MDBInput
                                icon="user"
                                iconClass="white-text text-left"
                                className='white-text'
                                value={this.state.firstName}
                                label="Your first name"
                                name="firstName"
                                required
                                // error={errors.firstName}
                                onChange={this.onChange}
                            />

                            <MDBInput
                                className='white-text'
                                iconClass="white-text"
                                label="Your last name"
                                icon="user"
                                value={this.state.lastName}
                                name="lastName"
                                // error={errors.lastName}
                                onChange={this.onChange}
                            />

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
                                // error={errors.email}
                                onChange={this.onChange}
                            />

                            <MDBInput
                                className='white-text'
                                iconClass="white-text"
                                label="Your password"
                                icon="lock"
                                name="password"
                                value={this.state.password}
                                group
                                type="password"
                                validate
                                // error={errors.password}
                                onChange={this.onChange}
                            />

                            <div className="text-center mt-4 black-text">

                                <MDBBtn color="indigo" type="submit">Singup</MDBBtn>
                                <hr className="hr-light" />
                                <div className="text-center d-flex justify-content-center white-label">
                                    <h6 className="mb-4 white-text">Have an Account?    </h6>
                                    <MDBBtn color="default-color" onClick={this.handleToggleActive}>Login</MDBBtn>

                                </div>
                            </div>
                        </form>
                    </MDBCardBody>
                </MDBCard>
            </div>
        )
    }
};

// SingupForm.propTypes = {
//     registerUser: PropTypes.func.isRequired,
//     auth: PropTypes.object.isRequired
//     // errors: PropTypes.object.isRequired

// }

// const mapStateToProps = state => ({
//     auth: state.auth
//     // errors: state.errors
// })
const mapStateToProps = state => ({
    user: state.auth.user,
    isAuthenticated: state.auth.isAuthenticated
});
const mapDispatchToProps = dispactch => ({
    signupUser: () => dispactch(signupUser())
});

export default connect(mapStateToProps, { registerUser })(withRouter(SingupForm));