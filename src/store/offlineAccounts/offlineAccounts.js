import { createSlice } from "@reduxjs/toolkit";
import * as url from "../../config/api.config";
import { apiRequest } from "../api/api";

const slice = createSlice({
    name: 'offlineAccounts',
    initialState: {
        accountsOff: [],
        accountsOffLoading: false
    },
    reducers: {
        setAccountsLoadingOff: (offlineAccount, action) => {
            offlineAccount.accountsOffLoading = true;
        },
        setAccountsLoadingOffFail: (offlineAccount, action) => {
            offlineAccount.accountsOffLoading = false;
        },
        addAccountOff: (offlineAccount, action) => {
            offlineAccount.accountsOff.push(action.payload);
        },
        deleteAccountOff: (offlineAccount, action) => {
            offlineAccount.accountsOff.filter(
                account => account._id !== action.payload
            );
        },
        getAccountsOff: (offlineAccount, action) => {
            offlineAccount.accountsOff = action.payload;
            offlineAccount.accountsOffLoading = false;
        }

    }

});
const { setAccountsLoadingOff, setAccountsLoadingOffFail, addAccountOff, deleteAccountOff, getAccountsOff } = slice.actions;
export default slice.reducer;

export const loadOffAccounts = () =>
    apiRequest({
        url: url.getOfflineUrl,
        method: 'get',
        onStart: setAccountsLoadingOff.type,
        onSucces: getAccountsOff.type,
        onError: setAccountsLoadingOffFail.type
    });

export const addOffAccount = account =>
    apiRequest({
        url: url.addOfflineUrl,
        method: 'post',
        data: account,
        onSucces: addAccountOff.type

    });

//delete******
export const deleteOffAccount = id =>
    apiRequest({
        url: url.addCredidCardUrl + id,
        method: 'post',
        onSucces: deleteAccountOff.type

    });
