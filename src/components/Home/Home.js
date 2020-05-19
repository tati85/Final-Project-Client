import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { MDBNav, MDBCard, MDBCardBody, MDBCardTitle, MDBContainer, MDBNavItem, MDBNavLink, MDBTabPane, MDBTabContent, MDBRow, MDBCol } from "mdbreact";
import '../../components/Layout/Layout';
import '../../components/NavBar/NavBar'
import NavBar from "../../components/NavBar/NavBar";
import { Layout } from "../../components/Layout/Layout";
import OffLineAccountList from '../Accounts/OfflineAccounts/OfflineAccountList';
import CreditAccountList from "../Accounts/CreditCardAccounts/CreditcardAccountList";

export default class MyTab extends React.Component {
    state = {
        activeItem: "1"
    };

    toggle = tab => e => {
        if (this.state.activeItem !== tab) {
            this.setState({
                activeItem: tab
            });
        }
    };
    render() {
        return (

            <Layout >
                <NavBar />
                <BrowserRouter>

                    <MDBNav tabs color="purple" className="nav-justified">
                        <MDBNavItem active>
                            <MDBNavLink active={this.state.activeItem === "1"} to="/overview" onClick={this.toggle("1")} className='mt-4'><h4 className="teal-text "><strong>Overview</strong></h4></MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="/home" className='mt-4' active={this.state.activeItem === "2"} onClick={this.toggle("2")}><h4 className="teal-text "><strong>Accounts</strong></h4></MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="/home" className='mt-4' active={this.state.activeItem === "3"} onClick={this.toggle("3")}><h4 className="teal-text "><strong>Transactions</strong></h4></MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="/home" className='mt-4'><h4 className="teal-text " active={this.state.activeItem === "4"} onClick={this.toggle("4")}><strong>Bills</strong></h4></MDBNavLink>
                        </MDBNavItem>
                    </MDBNav>
                    <MDBTabContent activeItem={this.state.activeItem} >
                        <MDBTabPane tabId="1" role="tabpanel">
                            <MDBContainer>
                                <MDBCard className="mt-5">
                                    <MDBCardBody>
                                        <MDBCardTitle>Hello</MDBCardTitle>
                                        <hr className="mt-2" />
                                    </MDBCardBody>

                                </MDBCard>
                            </MDBContainer>
                        </MDBTabPane>
                        <MDBTabPane tabId="2" role="tabpanel">
                            <MDBContainer>
                                <MDBCard className="mt-5">
                                    <MDBCardBody>
                                        <MDBCardTitle>Credit Card Accounts</MDBCardTitle>
                                        <hr className="mt-2" />
                                        <CreditAccountList />
                                    </MDBCardBody>
                                </MDBCard>
                                <MDBCard className="mt-5">
                                    <MDBCardBody>
                                        <MDBCardTitle>Offline Accounts</MDBCardTitle>
                                        <hr className="mt-2" />
                                        <OffLineAccountList />
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBContainer>
                        </MDBTabPane>
                        <MDBTabPane tabId="3" role="tabpanel">
                            <MDBContainer>
                                <MDBCard className="mt-5">
                                    <MDBCardBody>
                                        <MDBCardTitle>Transactions for the last 30 days</MDBCardTitle>
                                        <hr className="mt-2" />

                                    </MDBCardBody>
                                </MDBCard>
                            </MDBContainer>
                        </MDBTabPane>
                        <MDBTabPane tabId="4" role="tabpanel">
                            <MDBContainer>
                                <MDBCard className="mt-5">
                                    <MDBCardBody>
                                        <MDBCardTitle>Next 30 days of Bills</MDBCardTitle>
                                        <hr className="mt-2" />
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBContainer>
                        </MDBTabPane>
                    </MDBTabContent>







                </BrowserRouter>
            </Layout>
        )
    }

}
