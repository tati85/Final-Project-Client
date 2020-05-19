import React from 'react';
import { MDBTable, MDBIcon, MDBTableBody, MDBTableHead, MDBBtn } from 'mdbreact';
import { connect } from 'react-redux';
import { addAccountOff, deleteAccountOff, getAccountsOff } from "../../../actions/accountActions";
import PropTypes from "prop-types";
import AddOfflineAccount from '../OfflineAccounts/AddOfflineModal'


class OffLineAccountList extends React.Component {
    componentDidMount() {
        this.props.getAccountsOff();
    }
    onDeleteClick = id => {
        this.props.deleteAccount(id);
    }
    renderTable = () => {
        const { accountsOff } = this.props.plaid;

        return accountsOff.map(account => {
            <tr key={account._id}>
                <td>{account.name}</td>
                <td>{account.amount}</td>
                <td>{account.frecuency}</td>
                <td><MDBBtn outline color="secondary" onClick={() => this.onDeleteClick(account._id)}> Delete <MDBIcon icon="far fa-trash-alt" className="ml-1"></MDBIcon></MDBBtn></td>
            </tr>
        })

    }

    render() {
        const { accountsOff } = this.props.plaid;
        console.log(accountsOff + "*******************accounts off")
        let tableItems, tableItems1;
        if (accountsOff) {

            // tableItems = accountsOff.map(account => {
            //     <tr key={account._id}>
            //         <td>{account.name}</td>
            //         <td>{account.amount}</td>
            //         <td>{account.frecuency}</td>
            //         <td><MDBBtn outline color="secondary" onClick={() => this.onDeleteClick(account._id)}> Delete <MDBIcon icon="far fa-trash-alt" className="ml-1"></MDBIcon></MDBBtn></td>
            //     </tr>
            // });

            console.log(tableItems)

        }

        return (
            <div>
                <AddOfflineAccount />
                {!accountsOff ? <h3>There are no Offline Accounts at this moment</h3>
                    : (<div>
                        <MDBTable borderless className="mt-3">
                            <MDBTableHead>
                                <tr>
                                    <th>Name</th>
                                    <th>Amount</th>
                                    <th>Frecuency in days</th>
                                    <th></th>
                                </tr>

                            </MDBTableHead>
                            <MDBTableBody>
                                {() => this.renderTable()}
                            </MDBTableBody>

                        </MDBTable>
                        <h3>aqui va la lista</h3>
                        <ul>
                            {tableItems1}
                        </ul>
                    </div>)
                }
            </div>
        )
    }

}

OffLineAccountList.propTypes = {
    addAccountOff: PropTypes.func.isRequired,
    deleteAccountOff: PropTypes.func.isRequired,
    getAccountsOff: PropTypes.func.isRequired,
    plaid: PropTypes.object.isRequired,
    OfflineAccounts: PropTypes.array.isRequired

};
const mapStateToProps = state => ({
    plaid: state.plaid
});
export default connect(mapStateToProps, { addAccountOff, deleteAccountOff, getAccountsOff })(OffLineAccountList);
