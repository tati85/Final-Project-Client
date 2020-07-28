
import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { MDBNav, MDBRow, MDBCol, MDBCard, MDBBtn, MDBCardBody, MDBInput, MDBCardImage } from "mdbreact";
import NavBar from "../NavBar/NavBar";
import { Layout } from "../Layout/Layout";
import { connect } from 'react-redux';
import { updateUser } from "../../actions/authActions";
import PropTypes from "prop-types";


class MyProfile extends React.Component {

    state = {
        activeItem: "1",
        errorUpdating: "",
        firstName: this.props.auth.user.firstName,
        lastName: this.props.auth.user.lastName,
        email: this.props.auth.user.email,
        phoneNumber: this.props.auth.user.phoneNumber || "",
        image: ""
    }


    onSubmit = e => {
        e.preventDefault();
        const uploadData = new FormData();
        uploadData.append("image", this.state.image);
        uploadData.append("firstName", this.state.firstName);
        uploadData.append("lastName", this.state.lastName);
        uploadData.append("email", this.state.email);
        uploadData.append("phoneNumber", this.state.phoneNumber);


        this.props.updateUser(uploadData)
            .then((updatedUser) => {
                console.log('hello: ', updatedUser)

                // const { user } = updatedUser.data;
                //  this.setState(prevState => ({
                //  ...prevState,
                //  firstName: user.firstName,
                //  lastName: user.lastName,
                //  email: user.email,
                //  phoneNumber: user.phoneNumber,
                // image: user.image
                // }));

            })
            .catch((err) => {
                console.log("Error updating user" + err.response);
                this.setState({ errorUpdating: "Error updating" });
            });
    };

    onChange = e => {
        let val = e.target.value;
        let nam = e.target.name;
        this.setState({ [nam]: val });
    };

    handleImageChange = (event) => {
        const file = event.target.files[0];
        this.setState(() => ({ image: file }));
    };
    render() {

        console.log(this.state.image + "  state first image")
        console.log(this.state.phoneNumber + "  state phone number")
        console.log(this.state.email + "  state first email")
        return (

            <Layout>
                <NavBar />
                <BrowserRouter>

                    <MDBRow className='mt-5'>
                        <MDBCol md='12'>
                            <MDBCard >
                                <div >
                                    <MDBCardImage className="img-fluid rounded-circle hoverable" src={this.props.auth.user.image} alt="user image" />

                                    <MDBCardBody>
                                        <h4 className='card-title'>{this.props.auth.user.firstName} {this.props.auth.user.lastName}</h4>
                                        <hr />
                                        <form onSubmit={(event) => this.onSubmit(event)}>
                                            <div className="grey-text ">
                                                <MDBInput
                                                    label="First Name"
                                                    type="text"
                                                    icon="user"
                                                    group
                                                    name="firstName"
                                                    value={this.state.firstName}

                                                    onChange={event => this.onChange(event)}
                                                />
                                                <MDBInput
                                                    label="Last Name"
                                                    type="text"
                                                    group
                                                    name="lastName"
                                                    value={this.state.lastName}

                                                    onChange={event => this.onChange(event)}

                                                />
                                                <MDBInput
                                                    label="Your email"
                                                    icon="envelope"
                                                    type="email"
                                                    name="email"
                                                    value={this.state.email}
                                                    validate
                                                    group
                                                    error="wrong"
                                                    success="right"
                                                    onChange={event => this.onChange(event)}
                                                />

                                                <MDBInput
                                                    label="Your Phone Number"
                                                    icon="lock"
                                                    name="phoneNumber"
                                                    group
                                                    type="text"
                                                    value={this.state.phoneNumber || ""}
                                                    onChange={event => this.onChange(event)}
                                                />
                                                <MDBInput
                                                    name="image"
                                                    group
                                                    type="file"
                                                    onChange={(event) => this.handleImageChange(event)}
                                                    ref={(ref) => (this.fileInput = ref)}
                                                />

                                            </div>
                                            <div className="text-center py-4 mt-3">
                                                <MDBBtn color="cyan" type="submit">
                                                    Update
                                                 </MDBBtn>
                                            </div>
                                        </form>

                                    </MDBCardBody>
                                </div>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>



                </BrowserRouter>

            </Layout>
        )
    }

}

MyProfile.propTypes = {
    updateUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,

}

const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(mapStateToProps, { updateUser })(MyProfile);
