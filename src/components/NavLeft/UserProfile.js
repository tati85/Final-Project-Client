import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUser } from "../../actions/authActions";
import PropTypes from "prop-types";
import { MDBContainer, MDBCardBody, MDBInput, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBCard } from 'mdbreact';

class ModalProfile extends Component {
    state = {
        modal14: false,
        errorUpdating: "",
        firstName: this.props.user.firstName,
        lastName: this.props.user.lastName,
        email: this.props.user.email,
        password: this.props.user.password,
        image: this.props.user.image
    }

    toggle = nr => () => {
        let modalNumber = 'modal' + nr
        this.setState({
            [modalNumber]: !this.state[modalNumber]
        });
    }
    onSubmit = e => {
        e.preventDefault();
        const {
            firstName, lastName, email, password, image
        } = this.state
        this.props.updateUser({ firstName, lastName, email, password, image })
            .then((updatedUser) => {
                const { userinfo } = updatedUser.data;
                this.setState(prevState => ({
                    ...prevState,
                    firstName: userinfo.firstName,
                    lastName: userinfo.lastName,
                    email: userinfo.email,
                    password: userinfo.password,
                    image: userinfo.image
                }));

            })
            .catch((err) => {
                console.log("Error updating user" + err);
                this.setState({ errorUpdating: "Error updating" });
            });
    };

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    };

    handleImageChange = (event) => {
        const { file } = event.target;

        this.setState({ image: file });
    };

    render() {
        return (
            <MDBContainer>
                <input id="image" type="image" onClick={this.toggle(14)} src={this.state.image}
                    alt="" className="rounded-circle img-fluid" style={{ width: "30px" }}></input>

                <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
                    <MDBModalHeader color="info" toggle={this.toggle(14)}>User Profile</MDBModalHeader>
                    <MDBModalBody>
                        <MDBCard>
                            <img

                                src={this.state.image}
                                alt=""
                                className="rounded-circle img-fluid mx-auto white"
                            />
                            <MDBCardBody>
                                <form>
                                    <p className="h4 text-center py-4">Update Profile</p>
                                    <div className="grey-text">
                                        <MDBInput
                                            label="First Name"
                                            group
                                            type="text"
                                            value={this.state.firstName}
                                            validate
                                            error="wrong"
                                            success="right"
                                            onChange={this.onChange}
                                        />
                                        <MDBInput
                                            label="Last Name"
                                            group
                                            type="text"
                                            value={this.state.lastName}
                                            validate
                                            error="wrong"
                                            success="right"
                                            onChange={this.onChange}

                                        />
                                        <MDBInput
                                            label="Your email"
                                            icon="envelope"
                                            group
                                            type="email"
                                            value={this.state.email}
                                            validate
                                            error="wrong"
                                            success="right"
                                            onChange={this.onChange}
                                        />

                                        <MDBInput
                                            label="Your password"
                                            icon="lock"
                                            group
                                            type="password"
                                            value={this.state.password}
                                            validate
                                            onChange={this.onChange}
                                        />
                                        <MDBInput
                                            label="Your password"
                                            icon="lock"
                                            group
                                            type="file"
                                            name='image'
                                            validate
                                            onChange={this.handleImageChange}
                                        />
                                    </div>
                                    <div className="text-center py-4 mt-3">
                                        <MDBBtn color="cyan" type="submit">
                                            Update
                  </MDBBtn>
                                    </div>
                                </form>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBModalBody>
                    <MDBModalFooter>
                        {this.state.errorUpdating} ?<h3>{this.state.errorUpdating}</h3>:<h3>Updated Succesfull</h3>

                        <MDBBtn color="secondary" onClick={this.toggle(14)}>Close</MDBBtn>
                        <MDBBtn color="primary">Save changes</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </MDBContainer>
        );
    }
}

ModalProfile.propTypes = {
    updateUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { updateUser })(ModalProfile);