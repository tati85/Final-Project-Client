import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";
import '../../components/Layout/Layout';
import '../../components/NavBar/NavBar'
import NavBar from "../../components/NavBar/NavBar";
import { Layout } from "../../components/Layout/Layout";

export default () => (
    <Layout >
        <NavBar />
        <BrowserRouter>

            <MDBNav tabs color="purple" className="nav-justified">
                <MDBNavItem active>
                    <MDBNavLink active to="#!" className='mt-4'><h4 className="teal-text "><strong>Overview</strong></h4></MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBNavLink to="#!" className='mt-4'><h4 className="teal-text "><strong>Transaction</strong></h4></MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBNavLink to="#!" className='mt-4'><h4 className="teal-text "><strong>Bills</strong></h4></MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBNavLink to="#!" className='mt-4'><h4 className="teal-text "><strong>Chart</strong></h4></MDBNavLink>
                </MDBNavItem>
            </MDBNav>
            <hr className="hr-teal" />

        </BrowserRouter>
    </Layout>
);