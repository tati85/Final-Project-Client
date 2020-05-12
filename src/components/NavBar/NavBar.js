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
    MDBIcon,

}

    from "mdbreact";

import {
    BrowserRouter as Router
}

    from 'react-router-dom';
import './NavBar.css';
import Logo from "../../assets/my-logo.ico";
import ModalProfile from '../NavLeft/UserProfile';


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
                        <img className='my-logo' src={Logo} alt="logo" />
                        <strong className="white-text"> REM-BILLS</strong>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler onClick={this.toggleCollapse} />
                    <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                        <MDBNavbarNav left>
                        </MDBNavbarNav>
                        <MDBNavbarNav right>

                            <MDBNavItem>
                                <MDBNavLink to="#!">
                                    <ModalProfile />

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