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
    MDBIcon,
    IMDBAvatar
}

    from "mdbreact";

import {
    BrowserRouter as Router
}

    from 'react-router-dom';
import './NavBar.css';
import ModalLoginButton from '../Not used/LoginButton';
import Logo from "../../assets/my-logo.ico";


class NavBar extends Component {
    state = {
        isOpen: false
    };

    toggleCollapse = () => {
        this.setState({
            isOpen: !this.state.isOpen
        }

        );
    }

    render() {
        return (
            <Router>
                <MDBNavbar color="default-color" dark expand="md" className='my-nav'>
                    <MDBNavbarBrand>
                        <img className='my-logo' src={Logo} />
                        <strong className="white-text"> REM-BILLS</strong>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler onClick={this.toggleCollapse} />
                    <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                        <MDBNavbarNav left>
                        </MDBNavbarNav>
                        <MDBNavbarNav right>
                            <MDBNavItem active>
                                <MDBNavLink to="#!"> +Account</MDBNavLink>
                            </MDBNavItem >
                            <MDBNavItem>
                                <MDBNavLink to="#!">

                                    <img
                                        src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
                                        alt=""
                                        className="rounded-circle img-fluid" style={{ width: "30px" }}
                                    />

                                </MDBNavLink>
                            </MDBNavItem>

                            <MDBNavItem className='lm-3'>
                                <MDBNavLink to="#!">
                                    Logout
                            <MDBIcon icon="sign-out-alt" />

                                </MDBNavLink>
                            </MDBNavItem>


                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBNavbar>
            </Router>);
    }
}

export default NavBar;