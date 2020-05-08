import React, { Fragment, Component } from "react";

import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBIcon } from 'mdbreact';

class ModalLoginButton extends Component {
    state = {
        modal14: false
    }

    toggle = nr => () => {
        let modalNumber = 'modal' + nr
        this.setState({
            [modalNumber]: !this.state[modalNumber]
        });
    }

    render() {
        return (
            <MDBContainer>
                <MDBBtn outline color="white" onClick={this.toggle(14)}>
                    <MDBIcon far icon="user-circle" /> Logout
        </MDBBtn>
                <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
                    <MDBModalHeader toggle={this.toggle(14)}>
                        <img src="https://mdbootstrap.com/img/Others/documentation/1.jpg" className="img-fluid" alt="" />
          Login</MDBModalHeader>
                    <MDBModalBody>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.
          </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn color="secondary" onClick={this.toggle(14)}>Close</MDBBtn>
                        <MDBBtn color="primary">Save changes</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </MDBContainer>
        );
    }
}

export default ModalLoginButton;








