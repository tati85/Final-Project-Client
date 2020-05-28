import { createSlice } from "@reduxjs/toolkit";
import { apiRequest } from "../api/api";
import * as url from "../../config/api.config";

const slice = createSlice({
    name: 'creditCards',
    initialState: {
        accounts: [],
        transactions: [],
        accountsLoading: false,
        transactionsLoading: false,

    },
    reducers: {
        setAccountsLoading: (creditCard, action) => {
            creditCard.accountsLoading = true;
        },
        setAccountsLoadingFail: (creditcard, action) => {
            creditCard.accountsLoading = false;
        },
        addAccount: (creditCard, action) => {
            creditCard.accounts.push(action.payload);
        },
        deletedAccount: (creditCard, action) => {
            creditCard.accounts.filter(
                account => account._id !== action.payload
            );
        },
        getAccounts: (creditCard, action) => {
            creditCard.accounts = action.payload;
            creditCard.accountsLoading = false;
        },
        setTransactionsLoading: (creditCard, action) => {
            creditCard.transactionsLoading = true;
        },
        getTransactions: (creditCard, action) => {
            creditCard.transactions = action.payload;
            creditCard.transactionsLoading = false;
        },
        setTransactionsLoadingFail: (creditCard, action) => {
            creditCard.transactionsLoading = false;
        }

    }

});
const { setAccountsLoading, setAccountsLoadingFail, addAccount, deletedAccount, getAccounts, setTransactionsLoadingFail, setTransactionsLoading, getTransactions } = slice.actions;
export default slice.reducer;

export const loadAccounts = () =>
    apiRequest({
        url: url.getCredidCardUrl,
        method: 'get',
        onStart: setAccountsLoading.type,
        onSucces: getAccounts.type,
        onError: setAccountsLoadingFail.type
    });

export const addCreditAccount = account =>
    apiRequest({
        url: url.addCredidCardUrl,
        method: 'post',
        data: account,
        onSucces: addAccount.type

    });

//delete credit cards*******
export const deleteAccount = id =>
    apiRequest({
        url: url.deleteCredidCardUrl + id,
        method: 'delete',
        onSucces: deletedAccount.type
    })

export const loadTransactions = trans =>
    apiRequest({
        url: url.getTransactionUrl,
        method: 'post',
        data: trans,
        onStart: setTransactionsLoading.type,
        onSucces: getTransactions.type,
        onError: setTransactionsLoadingFail.type

    })

