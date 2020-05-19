import {
    ADD_ACCOUNT,
    DELETE_ACCOUNT,
    GET_ACCOUNTS,
    ACCOUNTS_LOADING,
    GET_TRANSACTIONS,
    TRANSACTIONS_LOADING,
    ADD_ACCOUNTS_OFF,
    DELETE_ACCOUNTS_OFF,
    GET_ACCOUNTS_OFF,
    OFF_ACCOUNTS_LOADING,
    GET_BILLS_ACCOUNT,
    GET_OFF_BILLS,
    ACCOUNTS_BILL_LOADING

} from "./types";
import { PLAID_SERVICE, OFFLINE_SERVICE } from '../services/AuthService';


// Add account
export const addAccount = plaidData => dispatch => {
    const accounts = plaidData.accounts;
    console.log("inside addccount in accountActions")
    PLAID_SERVICE.addAccount(plaidData)
        .then(res => {
            console.log("account added succesfull in db")
            dispatch({
                type: ADD_ACCOUNT,
                payload: res.data
            })

        })
        .then(data =>
            accounts ? dispatch(getTransactions(accounts.concat(data.payload))) : null
        )
        .catch(err => console.log(err));
};
//add offline account
export const addAccountOff = plaidData => dispatch => {
    console.log("inside addccountoff in accountActions")
    OFFLINE_SERVICE.addAccount(plaidData)
        .then(res => {
            console.log("account added succesfull in db");
            dispatch({
                type: ADD_ACCOUNTS_OFF,
                payload: res.data
            })
        })
        .catch(err => {
            console.log(err + "****error adding offline account")
        });
};


// Delete account
export const deleteAccount = plaidData => dispatch => {
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

};


// Delete offline account
export const deleteAccountOff = plaidData => dispatch => {
    const id = plaidData.id;
    OFFLINE_SERVICE.deleteAccount(id)
        .then(res =>
            dispatch({
                type: DELETE_ACCOUNTS_OFF,
                payload: id
            })
        )
        .catch(err => console.log(err + "     error dresponse from server deleting off account"));

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
        .catch(err => {
            console.log('error from get account  payload null')
            dispatch({
                type: GET_ACCOUNTS,
                payload: null
            })
        });
};


// Get all offline accounts for specific user
export const getAccountsOff = () => dispatch => {
    dispatch(setAccountsLoadingOff());
    OFFLINE_SERVICE.allAccounts()
        .then(res => {
            console.log('response from db to client get all accounts')
            dispatch({
                type: GET_ACCOUNTS_OFF,
                payload: res.data
            })
        })
        .catch(err => {
            console.log('error from get offline account  payload null')
            dispatch({
                type: GET_ACCOUNTS_OFF,
                payload: null
            })
        });
};


// Accounts loading
export const setAccountsLoading = () => {
    return {
        type: ACCOUNTS_LOADING
    };
};

// offline Accounts loading
export const setAccountsLoadingOff = () => {
    return {
        type: OFF_ACCOUNTS_LOADING
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
            type: GET_BILLS_ACCOUNT,
            payload: null
        }))
}
//mark as paid cards
export const paidCardBill = data => dispatch => {
    PLAID_SERVICE.paidCard(data)
        .then((value) => {
            dispatch(getCardBills());
        })
        .catch((err) => { console.log("error paid bill card" + err) })
}


//get offaccounts bills
export const getOffBills = () => dispatch => {
    dispatch(setCardBillsLoading());
    PLAID_SERVICE.cardBills()
        .then()
        .catch((err) => dispatch({
            type: GET_OFF_BILLS,
            payload: null
        }))
}
//mark as paid offline accounts
export const paidOffBills = (id) => dispatch => {
    PLAID_SERVICE.paidOffCard(id)
        .then((value) => {
            dispatch(getOffBills())
        })
        .catch((err) => { console.log("error paid  offline bill card" + err) })
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