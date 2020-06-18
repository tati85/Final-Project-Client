import React from 'react';
import PlaidLinkButton from "react-plaid-link-button";
import { useDispatch, useSelector } from 'react-redux';
import { addCreditAccount, loadTransactions } from '../../../store/creditCards/creditCardAccounts';

const CreditCardHooks = () => {
    const [loaded, setLoaded] = useState(false);
    const accounts = useSelector(state => state.creditCards.accounts);
    const dispatch = useDispatch();
    handleOnSuccess = (token, metadata) => {
        const plaidData = {
            public_token: token,
            metadata: metadata
        };

        console.log(plaidData.public_token)
        console.log(metadata.institution.name)

        dispatch(addCreditAccount(plaidData));
        dispatch(loadTransactions(accounts));
    };



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
                    onSuccess: handleOnSuccess
                }}
                onScriptLoad={() => setLoaded(true)}
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
                            {accounts && accounts.map(account => {
                                return <tr key={account._id}>
                                    <td>{account.institutionName} {account.accountName}</td>
                                    <td>$ {account.balace}</td>
                                    <td>$ {account.available}</td>
                                    <td><MDBBtn outline color="secondary" onClick={() => this.onDeleteClick(account._id)}> Delete <MDBIcon icon="far fa-trash-alt" className="ml-1"></MDBIcon></MDBBtn></td>
                                </tr>
                            })}
                        </MDBTableBody>
                    </MDBTable>
                </div>
            }

        </div>
    );
};

export default CreditCardHooks;