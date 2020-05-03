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


class NavBar extends Component {
    state = {
        isOpen: false
    }

        ;

    toggleCollapse = () => {
        this.setState({
            isOpen: !this.state.isOpen
        }

        );
    }

    render() {
        return (
            <Router>
                <MDBNavbar color="transparent" dark expand="md" className='my-nav'>
                    <MDBNavbarBrand>
                        <img className='my-logo' src={Logo} />
                        <strong className="white-text"> Navbar</strong>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler onClick={this.toggleCollapse} />
                    <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                        <MDBNavbarNav left> <MDBNavItem active> <MDBNavLink to="#!">Home</MDBNavLink> </MDBNavItem> </MDBNavbarNav> <MDBNavbarNav right> <MDBNavItem> <MDBNavLink to="#!"> <ModalLoginButton /> </MDBNavLink> </MDBNavItem> </MDBNavbarNav> </MDBCollapse> </MDBNavbar> </Router>);
    }
}

export default NavBar;