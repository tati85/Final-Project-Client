import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { MDBNav, MDBNavItem, MDBNavLink, MDBTabPane, MDBTabContent } from "mdbreact";
import '../../components/Layout/Layout';
import '../../components/NavBar/NavBar'
import NavBar from "../../components/NavBar/NavBar";
import { Layout } from "../../components/Layout/Layout";

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
                            <MDBNavLink to="/transactions" className='mt-4' active={this.state.activeItem === "2"} onClick={this.toggle("2")}><h4 className="teal-text "><strong>Transactions</strong></h4></MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="#/bills" className='mt-4' active={this.state.activeItem === "3"} onClick={this.toggle("3")}><h4 className="teal-text "><strong>Bills</strong></h4></MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="accounts" className='mt-4'><h4 className="teal-text " active={this.state.activeItem === "4"} onClick={this.toggle("4")}><strong>Accounts</strong></h4></MDBNavLink>
                        </MDBNavItem>
                    </MDBNav>
                    <MDBTabContent activeItem={this.state.activeItem} >
                        <MDBTabPane tabId="1" role="tabpanel">
                            <p className="mt-2">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Nihil odit magnam minima, soluta doloribus reiciendis
                                molestiae placeat unde eos molestias. Quisquam aperiam,
                                pariatur. Tempora, placeat ratione porro voluptate odit
                                minima.
            </p>
                        </MDBTabPane>
                        <MDBTabPane tabId="2" role="tabpanel">
                            <p className="mt-2">
                                Quisquam aperiam, pariatur. Tempora, placeat ratione porro
                                voluptate odit minima. Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Nihil odit magnam minima,
                                soluta doloribus reiciendis molestiae placeat unde eos
                                molestias.
            </p>
                            <p>
                                Quisquam aperiam, pariatur. Tempora, placeat ratione porro
                                voluptate odit minima. Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Nihil odit magnam minima,
                                soluta doloribus reiciendis molestiae placeat unde eos
                                molestias.
            </p>
                        </MDBTabPane>
                        <MDBTabPane tabId="3" role="tabpanel">
                            <p className="mt-2">
                                Quisquam aperiam, pariatur. Tempora, placeat ratione porro
                                voluptate odit minima. Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Nihil odit magnam minima,
                                soluta doloribus reiciendis molestiae placeat unde eos
                                molestias.
            </p>
                        </MDBTabPane>
                    </MDBTabContent>







                </BrowserRouter>
            </Layout>
        )
    }

}
