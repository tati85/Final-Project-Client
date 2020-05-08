import {
    ADD_ACCOUNT,
    DELETE_ACCOUNT,
    GET_ACCOUNTS,
    ACCOUNTS_LOADING,
    GET_TRANSACTIONS,
    TRANSACTIONS_LOADING,
    GET_ACCOUNTS_BILL,
    ACCOUNTS_BILL_LOADING

} from "./types";
import { PLAID_SERVICE } from '../services/AuthService';


// Add account
export const addAccount = plaidData => dispatch => {
    const accounts = plaidData.accounts;
    PLAID_SERVICE.addAccount(plaidData)
        .then(res =>
            dispatch({
                type: ADD_ACCOUNT,
                payload: res.data
            })
        )
        .then(data =>
            accounts ? dispatch(getTransactions(accounts.concat(data.payload))) : null
        )
        .catch(err => console.log(err));
};

// Delete account
export const deleteAccount = plaidData => dispatch => {
    if (window.confirm("Are you sure you want to remove this account?")) {
        const id = plaidData.id;
        const newAccounts = plaidData.accounts.filter(
            account => account._id !== id
        );
        PLAID_SERVICE.deleteAccount(id)
            .then(res =>
                dispatch({
                    type: DELETE_ACCOUNT,
                    payload: id
                })
            )
            .then(newAccounts ? dispatch(getTransactions(newAccounts)) : null)
            .catch(err => console.log(err));
    }
};

// Get all accounts for specific user
export const getAccounts = () => dispatch => {
    dispatch(setAccountsLoading());
    PLAID_SERVICE.allAccounts()
        .then(res =>
            dispatch({
                type: GET_ACCOUNTS,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_ACCOUNTS,
                payload: null
            })
        );
};

// Accounts loading
export const setAccountsLoading = () => {
    return {
        type: ACCOUNTS_LOADING
    };
};

// Get Transactions
export const getTransactions = plaidData => dispatch => {
    dispatch(setTransactionsLoading());
    PLAID_SERVICE.transactions(plaidData)
        .then(res =>
            dispatch({
                type: GET_TRANSACTIONS,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_TRANSACTIONS,
                payload: null
            })
        );
};
//get bill credit cards
export const getCardBills = () => dispatch => {
    dispatch(setCardBillsLoading());
    PLAID_SERVICE.cardBills()
        .then()
        .catch((err) => dispatch({
            type: GET_ACCOUNTS_BILL,
            payload: null
        }))

}
//loading card bills
export const setCardBillsLoading = () => {
    return {
        type: ACCOUNTS_BILL_LOADING
    };
}
// Transactions loading
export const setTransactionsLoading = () => {
    return {
        type: TRANSACTIONS_LOADING
    };
};