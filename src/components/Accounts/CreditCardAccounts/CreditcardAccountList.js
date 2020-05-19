import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead, MDBBtn, MDBIcon } from 'mdbreact';
import { connect } from 'react-redux';
import { addAccount, getAccounts, deleteAccount } from "../../../actions/accountActions";
import PropTypes from "prop-types";
import PlaidLinkButton from "react-plaid-link-button";


class CreditAccountList extends React.Component {
    state = {
        loaded: false
    }
    componentDidMount() {
        this.props.getAccounts();
        console.log("inside component did mount creditcard list for get accounts")
    }
    handleOnSuccess = (token, metadata) => {
        const plaidData = {
            public_token: token,
            metadata: metadata
        };
        console.log(plaidData.public_token)
        console.log(metadata.institution.name)

        this.props.addAccount(plaidData);
    };
    onDeleteClick = id => {
        const { accounts } = this.props.plaid;
        const accountData = {
            id: id,
            accounts: accounts
        };
        this.props.deleteAccount(accountData);
    }

    render() {
        const { accounts, accountsLoading } = this.props.plaid;
        let tableItems;
        if (accounts) {
            console.log("ccounts to render in table items   " + accounts)
            tableItems = accounts.map(account => {
                <tr key={account._id}>
                    <td>{account.institutionName} {account.accountName}</td>
                    <td>$ {account.balace}</td>
                    <td>$ {account.available}</td>
                    <td><MDBBtn outline color="secondary" onClick={() => this.onDeleteClick(account._id)}> Delete <MDBIcon icon="far fa-trash-alt" className="ml-1"></MDBIcon></MDBBtn></td>
                </tr>
            })

        }

        return (
            <div>
                <PlaidLinkButton
                    buttonProps={{
                        className: "btn btn-outline-default"
                    }}
                    plaidLinkProps={{
                        clientName: "REM-BILLS",
                        key: "473acceba1cdadb3f2fb4b893ae0c7",
                        env: "development",
                        product: ["transactions"],
                        onSuccess: this.handleOnSuccess
                    }}
                    onScriptLoad={() => this.setState({ loaded: true })}
                >
                    Link Account
           </PlaidLinkButton>
                {!accounts ? <h3>There are no Creditcard Accounts at this moment</h3>
                    : <div>
                        <MDBTable borderless className="mt-3">
                            <MDBTableHead>
                                <tr>
                                    <th>Name</th>
                                    <th>Amount</th>
                                    <th>Available</th>
                                    <th></th>
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody>
                                {tableItems}
                            </MDBTableBody>
                        </MDBTable>
                    </div>
                }
            </div>
        )
    }

}

CreditAccountList.propTypes = {
    addAccount: PropTypes.func.isRequired,
    deleteAccount: PropTypes.func.isRequired,
    getAccounts: PropTypes.func.isRequired,
    plaid: PropTypes.object.isRequired,

};
const mapStateToProps = state => ({
    plaid: state.plaid
});
export default connect(mapStateToProps, { addAccount, deleteAccount, getAccounts })(CreditAccountList);
