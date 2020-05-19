import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addAccountOff, getAccountsOff } from "../../../actions/accountActions";
import PropTypes from "prop-types";
import { MDBContainer, MDBDatePickerV5, MDBCardImage, MDBCol, MDBCardBody, MDBRow, MDBInput, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBCard } from 'mdbreact';
import moment from "moment";
import { withRouter } from "react-router-dom";
class AddOfflineAccount extends Component {
    state = {
        modal14: false,
        name: "",
        amount: 0,
        frecuency: 1,
        dueDate: "2020-01-01"

    }
    toggle = nr => () => {
        let modalNumber = 'modal' + nr
        this.setState({
            [modalNumber]: !this.state[modalNumber]
        });
    }
    onSubmit = e => {
        e.preventDefault();
        const { name, amount, frecuency, dueDate } = this.state
        console.log("******************inside on submit modal add account")
        this.props.addAccountOff({ name, amount, frecuency, dueDate });
        this.setState({
            name: "",
            amount: 0,
            frecuency: 0,
            dueDate: ""
        });
        //this.props.getAccountsOff();
        // this.props.history.push("/home");

    };
    handleDate = e => {
        console.log(e)

        let date = new moment(e).format("YYYY-MM-DD");
        this.setState({ dueDate: date });
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    };
    render() {
        return (
            <MDBContainer>
                <MDBBtn onClick={this.toggle(14)}>+ ADD ACCOUNT</MDBBtn>

                <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>

                    <MDBModalBody>
                        <MDBRow>
                            <MDBCol md='12'>
                                <MDBCard testimonial>
                                    <div >
                                        <MDBCardImage className="img-fluid" src='https://previews.123rf.com/images/settaphan/settaphan1503/settaphan150300082/38616921-close-up-part-of-debit-card-for-background-about-finance-and-account.jpg'
                                            alt="user image" />

                                        <MDBCardBody>
                                            <h4 className='card-title'>ADD OFFLINE ACCOUNT</h4>
                                            <hr />
                                            <form onSubmit={this.onSubmit}>
                                                <div className="grey-text ">
                                                    <MDBInput
                                                        label="Name"
                                                        group
                                                        name="name"
                                                        type="text"
                                                        icon="credit-card"
                                                        value={this.state.name}
                                                        validate
                                                        error="wrong"
                                                        success="right"
                                                        onChange={this.onChange}
                                                    />
                                                    <MDBInput
                                                        label="Amount"
                                                        group
                                                        name="amount"
                                                        type="number"
                                                        value={this.state.amount}
                                                        icon="dollar-sign"
                                                        validate
                                                        error="wrong"
                                                        success="right"
                                                        onChange={this.onChange}

                                                    />
                                                    <MDBInput
                                                        label="Frecuency in days"
                                                        icon="redo"
                                                        group
                                                        type="number"
                                                        name="frecuency"
                                                        value={this.state.frecuency}
                                                        validate
                                                        error="wrong"
                                                        success="right"
                                                        onChange={this.onChange}
                                                    />
                                                    <MDBDatePickerV5 disablePast theme="success" getValue={(e) => this.handleDate(e)} />

                                                </div>
                                                <div className="text-center py-4 mt-3">
                                                    <MDBBtn color="cyan" type="submit">
                                                        Add
                                                    </MDBBtn>
                                                </div>
                                            </form>

                                        </MDBCardBody>
                                    </div>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn color="cyan" onClick={this.toggle(14)}>Close</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </MDBContainer>
        );
    }
}

AddOfflineAccount.propTypes = {
    addAccountOff: PropTypes.func.isRequired,
    plaid: PropTypes.object.isRequired,

};
const mapStateToProps = state => ({
    plaid: state.plaid
});

export default connect(mapStateToProps, { addAccountOff })(withRouter(AddOfflineAccount));