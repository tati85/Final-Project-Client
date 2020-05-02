import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import {
    MDBIcon,
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBInput,

} from "mdbreact";

class SingupForm extends React.Component {
    render() {
        return (
            <MDBCard id="classic-card">
                <MDBCardBody className="white-text">
                    <h3 className="text-center">
                        <MDBIcon icon="user" />
                        Login
                    </h3>
                    <hr className="hr-light" />
                    <MDBInput
                        icon="user"
                        iconClass="white-text text-left"
                        className="white-text"
                        label="Your first name"
                        name="firstName"
                        required
                    />
                    <MDBInput
                        className="white-text"
                        iconClass="white-text"
                        label="Your last name"
                        icon="user"
                        name="lastName"
                        required
                    />
                    <MDBInput
                        className="white-text"
                        iconClass="white-text"
                        label="Your email"
                        type="email"
                        icon="envelope"
                        name="email"
                        required
                    />
                    <MDBInput
                        className="white-text"
                        iconClass="white-text"
                        label="Your password"
                        icon="lock"
                        type="password"
                        name="password"
                        required
                    />
                    <div className="text-center mt-4 black-text">
                        <MDBBtn color="indigo" type="submit">Login</MDBBtn>
                        <hr className="hr-light" />
                        <div className="text-center d-flex justify-content-center white-label">
                            <h6 className="mb-4 white-text">Don't have an account?    </h6>
                            <Router>
                                <Link to={this.toggleLogin()}>Sing Up</Link>
                            </Router>


                        </div>
                    </div>
                </MDBCardBody>
            </MDBCard>

        )
    }




}
export default SingupForm;