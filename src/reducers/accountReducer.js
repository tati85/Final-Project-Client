import {
    ADD_ACCOUNT,
    DELETE_ACCOUNT,
    GET_ACCOUNTS,
    ACCOUNTS_LOADING,
    GET_ACCOUNTS_BILL,
    ACCOUNTS_BILL_LOADING,
    GET_TRANSACTIONS,
    TRANSACTIONS_LOADING

} from "../actions/types";

const initialState = {
    accounts: [],
    accountsBill: [],
    transactions: [],
    accountsLoading: false,
    transactionsLoading: false,
    accountsBillLoading: false
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
        case ACCOUNTS_BILL_LOADING:
            return {
                ...state,
                accountsBillLoading: false
            };
        case GET_ACCOUNTS_BILL:
            return {
                ...state,
                accountsBill: action.payload,
                accountsBillLoading: false
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