import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavItem,
    MDBNavLink,
    MDBNavbarToggler,
    MDBCollapse,
    MDBMask,
    MDBRow,
    MDBCol,
    MDBView,
    MDBContainer,
    MDBFormInline,
    MDBAnimation
} from "mdbreact";
import "./Mylogin.css";
import LoginForm from "../Form/LoginForm";
import SingupForm from '../Form/SingupForm';

class MyLoginFormPage extends React.Component {
    state = {
        collapseID: "",
        loginShow: true,

    };

    toggleCollapse = collapseID => () =>
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));
    toggleLogin = () => {
        this.setState(prevState => ({
            loginShow: !prevState.loginShow,


        }));
        console.log("inside toggleLogin***********************" + this.state.loginShow)
    }

    render() {
        const overlay = (
            <div
                id="sidenav-overlay"
                style={{ backgroundColor: "transparent" }}
                onClick={this.toggleCollapse("navbarCollapse")}
            />
        );
        const loginShow = this.state.loginShow;
        console.log(loginShow + "                      loginShow in render")
        return (
            <div id="classicformpage">
                <Router>
                    <div>
                        <MDBNavbar dark expand="md" fixed="top">
                            <MDBContainer>
                                <MDBNavbarBrand>
                                    <strong className="white-text">MDB</strong>
                                </MDBNavbarBrand>
                                <MDBNavbarToggler
                                    onClick={this.toggleCollapse("navbarCollapse")}
                                />
                                <MDBCollapse
                                    id="navbarCollapse"
                                    isOpen={this.state.collapseID}
                                    navbar
                                >
                                    <MDBNavbarNav left>
                                        <MDBNavItem active>
                                            <MDBNavLink to="#!">Home</MDBNavLink>
                                        </MDBNavItem>
                                        <MDBNavItem>
                                            <MDBNavLink to="#!">Link</MDBNavLink>
                                        </MDBNavItem>
                                        <MDBNavItem>
                                            <MDBNavLink to="#!">Profile</MDBNavLink>
                                        </MDBNavItem>
                                    </MDBNavbarNav>
                                    <MDBNavbarNav right>
                                        <MDBNavItem>
                                            <MDBFormInline waves>
                                                <div className="md-form my-0">
                                                    <input
                                                        className="form-control mr-sm-2"
                                                        type="text"
                                                        placeholder="Search"
                                                        aria-label="Search"
                                                    />
                                                </div>
                                            </MDBFormInline>
                                        </MDBNavItem>
                                    </MDBNavbarNav>
                                </MDBCollapse>
                            </MDBContainer>
                        </MDBNavbar>
                        {this.state.collapseID && overlay}
                    </div>
                </Router>

                <MDBView>
                    <MDBMask className="d-flex justify-content-center align-items-center gradient">
                        <MDBContainer>
                            <MDBRow>

                                <MDBAnimation
                                    type="fadeInLeft"
                                    delay=".7s"
                                    className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                                    <h1 className="h1-responsive font-weight-bold">
                                        Never miss a Payment!  </h1>

                                    <h1 className="h1-responsive font-weight-bold">
                                        All your Bills in one Place  </h1>

                                    <hr className="hr-light" />
                                    <h6 className="mb-4">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Rem repellendus quasi fuga nesciunt dolorum nulla magnam
                                        veniam sapiente, fugiat! Commodi sequi non animi ea dolor
                                        molestiae, quisquam iste, maiores. Nulla.
                                    </h6>

                                </MDBAnimation>

                                <MDBCol md="6" xl="5" className="mb-4">
                                    <MDBAnimation type="fadeInRight" delay=".7s">
                                        {loginShow
                                            ? <LoginForm onClickLogin={this.toggleLogin} />
                                            : <SingupForm onClickLogin={this.toggleLogin} />
                                        }
                                    </MDBAnimation>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </MDBMask>
                </MDBView>

                <MDBContainer>
                    <MDBRow className="py-5">
                        <MDBCol md="12" className="text-center">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        );
    }
}

export default MyLoginFormPage;