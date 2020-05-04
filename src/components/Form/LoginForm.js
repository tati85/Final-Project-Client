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

class LoginForm extends React.Component {
    handleToggleActive = () => {
        this.props.onClickLogin();
        console.log("inside handle togglective in login form*********************")
    }

    render() {

        return (
            <AuthContext.Consumer>
                {context => {
                    const {
                        formLogin: { email, password },
                        isLoggedIn,
                        message
                    } = context.state;
                    const { handleLoginInput, handleLoginSubmit } = context;

                    return (
                        <div>
                            <MDBCard id="classic-card">
                                <MDBCardBody className="white-text">
                                    <form onSubmit={handleLoginSubmit} >
                                        <h3 className="text-center">
                                            <MDBIcon icon="user" />
                                Login
                           </h3>
                                        <hr className="hr-light" />

                                        <MDBInput
                                            className="white-text"
                                            iconClass="white-text"
                                            label="Your email"
                                            icon="envelope"
                                            value={email}
                                            name="email"
                                            group
                                            type="email"
                                            validate
                                            error="wrong"
                                            success="right"
                                            onChange={handleLoginInput}
                                        />
                                        <MDBInput
                                            className="white-text"
                                            iconClass="white-text"
                                            label="Your password"
                                            icon="lock"
                                            value={password}
                                            name="password"
                                            group
                                            type="password"
                                            validate
                                            onChange={handleLoginInput}
                                        />
                                        <div className="text-center mt-4 black-text">
                                            <MDBBtn color="indigo" type="submit">Login</MDBBtn>


                                            <hr className="hr-light" />
                                            <div className="text-center d-flex justify-content-center white-label">
                                                <h6 className="mb-4 white-text">Don't have an account?    </h6>
                                                <MDBBtn outline color="indigo" onClick={this.handleToggleActive}>Sing Up</MDBBtn>



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
export default LoginForm;