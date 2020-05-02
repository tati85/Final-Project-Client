import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import {
    MDBIcon,
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBInput,

} from "mdbreact";

class LoginForm extends React.Component {
    state = {
        active: false
    }


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
                        type="password"
                        icon="lock"
                        name="password"
                        required
                    />
                    <div className="text-center mt-4 black-text">
                        <MDBBtn color="indigo" type="submit">Login</MDBBtn>
                        <hr className="hr-light" />
                        <div className="text-center d-flex justify-content-center white-label">
                            <h6 className="mb-4 white-text">Have an account?    </h6>
                            <MDBBtn outline color="transparent" onClick={this.toggleLogin()}>Login</MDBBtn>




                        </div>
                    </div>
                </MDBCardBody>
            </MDBCard>

        )
    }




}
export default LoginForm;