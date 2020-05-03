import React from "react";
import { Link } from "react-router-dom";
import {
    MDBIcon,
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBInput,

} from "mdbreact";
import { AuthContext } from '../../context/index';

class SingupForm extends React.Component {

    handleToggleActive = () => {
        this.props.onClickLogin();
    }
    render() {
        return (
            <AuthContext.Consumer>
                {context => {
                    const {
                        formSignup: { firstName, lastName, email, password },
                        isLoggedIn,
                        message } = context.state;
                    const { handleSignupInput, handleSignupSubmit } = context;
                    return (
                        <div>
                            <MDBCard id="classic-card">
                                <MDBCardBody className="white-text">
                                    <form onSubmit={handleSignupSubmit} >
                                        <h3 className="text-center">
                                            <MDBIcon icon="user" />
                                            Singup
                                        </h3>
                                        <hr className="hr-light" />
                                        <MDBInput
                                            icon="user"
                                            iconClass="white-text text-left"
                                            className="white-text"
                                            // value={firstName}
                                            label="Your first name"
                                            name="firstName"
                                            required
                                            onChange={handleSignupInput}
                                        />
                                        <MDBInput
                                            className="white-text"
                                            iconClass="white-text"
                                            label="Your last name"
                                            icon="user"
                                            // value={lastName}
                                            name="lastName"
                                            required
                                            onChange={handleSignupInput}
                                        />
                                        <MDBInput
                                            className="white-text"
                                            iconClass="white-text"
                                            label="Your email"
                                            icon="envelope"
                                            // value={email}
                                            name="email"
                                            group
                                            type="email"
                                            validate
                                            error="wrong"
                                            success="right"
                                            onChange={handleSignupInput}
                                        />
                                        <MDBInput
                                            className="white-text"
                                            iconClass="white-text"
                                            label="Your password"
                                            icon="lock"
                                            name="password"
                                            // Q
                                            group
                                            type="password"
                                            validate
                                            onChange={handleSignupInput}
                                        />
                                        <div className="text-center mt-4 black-text">

                                            <MDBBtn color="indigo" type="submit">Login</MDBBtn>
                                            <hr className="hr-light" />
                                            <div className="text-center d-flex justify-content-center white-label">
                                                <h6 className="mb-4 white-text">Have an Account?    </h6>

                                                <Link to={() => this.handleToggleActive()}>Login</Link>

                                            </div>
                                        </div>
                                    </form>
                                </MDBCardBody>
                            </MDBCard>
                        </div>
                    )
                }
                }
            </AuthContext.Consumer>
        )
    }
}
export default SingupForm;