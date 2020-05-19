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
    BrowserRouter as Router, withRouter
}
    from 'react-router-dom';
import { browserHistory, Redirect } from 'react-router';

import { connect } from "react-redux";
import PropTypes from "prop-types";
import './NavBar.css';
import Logo from "../../assets/my-logo.ico";
// import ModalProfile from '../NavLeft/UserProfile';
import { logoutUser } from "../../actions/authActions";


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
    onLogoutClick = () => {

        this.props.logoutUser();
        console.log("inside logout onClick");
        this.props.history.push('/');
    }
    handleclick = () => {
        this.props.history.push('/profile');
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
                                    <input id="image" type="image" onClick={this.handleclick} src={this.props.auth.user.image}
                                        alt="user" className="rounded-circle img-fluid" style={{ width: "40px" }}></input>

                                </MDBNavLink>
                            </MDBNavItem>

                            <MDBNavItem className='lm-3'>
                                <MDBNavLink to="#" onClick={this.onLogoutClick}>
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
NavBar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired

}
const mapStateToProps = state => ({
    auth: state.auth

});

export default connect(
    mapStateToProps,
    { logoutUser }
)(withRouter(NavBar))



