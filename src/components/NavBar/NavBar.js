<<<<<<< HEAD
import React,
{
    Component
}

    from "react";

import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavItem,
    MDBNavLink,
    MDBNavbarToggler,
    MDBCollapse,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBIcon
}

    from "mdbreact";

import {
    BrowserRouter as Router
}

    from 'react-router-dom';
import './NavBar.css';
import ModalLoginButton from '../Button/LoginButton';
import Logo from "../../assets/my-logo.ico";

=======
import React, { Component } from "react";
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
    MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import './NavBar.css'
>>>>>>> 6ed59526464a7f6c0657417552df3395eca3270f

class NavBar extends Component {
    state = {
        isOpen: false
<<<<<<< HEAD
    }

        ;

    toggleCollapse = () => {
        this.setState({
            isOpen: !this.state.isOpen
        }

        );
=======
    };

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
>>>>>>> 6ed59526464a7f6c0657417552df3395eca3270f
    }

    render() {
        return (
            <Router>
<<<<<<< HEAD
                <MDBNavbar color="transparent" dark expand="md" className='my-nav'>
                    <MDBNavbarBrand>
                        <img className='my-logo' src={Logo} />
                        <strong className="white-text"> Navbar</strong>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler onClick={this.toggleCollapse} />
                    <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                        <MDBNavbarNav left> <MDBNavItem active> <MDBNavLink to="#!">Home</MDBNavLink> </MDBNavItem> </MDBNavbarNav> <MDBNavbarNav right> <MDBNavItem> <MDBNavLink to="#!"> <ModalLoginButton /> </MDBNavLink> </MDBNavItem> </MDBNavbarNav> </MDBCollapse> </MDBNavbar> </Router>);
=======
                <MDBNavbar color="blue-grey lighten-5" dark expand="md">
                    <MDBNavbarBrand>
                        <strong className="white-text">Navbar</strong>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler onClick={this.toggleCollapse} />
                    <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                        <MDBNavbarNav left>
                            <MDBNavItem active>
                                <MDBNavLink to="#!">Home</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="#!">Features</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="#!">Pricing</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBDropdown>
                                    <MDBDropdownToggle nav caret>
                                        <div className="d-none d-md-inline">Dropdown</div>
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu className="dropdown-default">
                                        <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                                        <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                                        <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                                        <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </MDBNavItem>
                        </MDBNavbarNav>
                        <MDBNavbarNav right>
                            <MDBNavItem>
                                <MDBNavLink className="waves-effect waves-light" to="#!">
                                    <MDBIcon fab icon="twitter" />
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink className="waves-effect waves-light" to="#!">
                                    <MDBIcon fab icon="google-plus-g" />
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBDropdown>
                                    <MDBDropdownToggle nav caret>
                                        <MDBIcon icon="user" />
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu className="dropdown-default">
                                        <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                                        <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                                        <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                                        <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </MDBNavItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBNavbar>
            </Router>
        );
>>>>>>> 6ed59526464a7f6c0657417552df3395eca3270f
    }
}

export default NavBar;