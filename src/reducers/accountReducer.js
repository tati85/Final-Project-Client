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
    GET_OFF_BILLS


} from "../actions/types";

const initialState = {
    accounts: [],
    accountsOff: [],
    billsOff: [],
    bills: [],
    transactions: [],
    accountsLoading: false,
    transactionsLoading: false,
    accountsOffLoading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ACCOUNTS_LOADING:
            return {
                ...state,
                accountsLoading: true
            };
        case ADD_ACCOUNT:
            return {
                ...state,
                accounts: [action.payload, ...state.accounts]
            };
        case GET_BILLS_ACCOUNT:
            return {
                ...state,
                bills: [action.payload, ...state.bills]
            };
        case GET_OFF_BILLS:
            return {
                ...state,
                billsOff: [action.payload, ...state.billsOff]
            };
        case ADD_ACCOUNTS_OFF:
            return {
                ...state,
                accountsOff: [action.payload, ...state.accountsOff]
            };
        case OFF_ACCOUNTS_LOADING:
            return {
                ...state,
                accountsOffLoading: true
            };
        case DELETE_ACCOUNTS_OFF:
            return {
                ...state,
                accountsOff: state.accountsOff.filter(
                    accountsOff => accountsOff.id !== action.payload
                )
            };
        case GET_ACCOUNTS_OFF:
            return {
                ...state,
                accountsOff: action.payload,
                accountsOffLoading: false
            };
        case DELETE_ACCOUNT:
            return {
                ...state,
                accounts: state.accounts.filter(
                    account => account._id !== action.payload
                )
            };
        case GET_ACCOUNTS:
            return {
                ...state,
                accounts: action.payload,
                accountsLoading: false
            };
        case TRANSACTIONS_LOADING:
            return {
                ...state,
                transactionsLoading: true
            };
        case GET_TRANSACTIONS:
            return {
                ...state,
                transactions: action.payload,
                transactionsLoading: false
            };
        default:
            return state;
    }
}