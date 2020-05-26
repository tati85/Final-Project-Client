import { createSlice } from "@reduxjs/toolkit";
const isEmpty = require("is-empty");
import { apiRequest } from "../api/api";
import * as url from "../../config/api.config";

const slice = createSlice({
    name: 'users',
    initialState: {
        isAuthenticated: false,
        user: {},
        loading: false,

    },
    reducers: {
        setCurrentUser: (user, action) => {
            user.isAuthenticated = !isEmpty(action.payload);
            user.user = action.payload;
            user.loading = false;
        },
        setUserLoading: (user, action) => {
            user.loading = true;
        },
        setUserLoadingFail: (user, action) => {
            user.loading = false;
        }
    }
})

const { setCurrentUser, setUserLoading, setUserLoadingFail } = slice.actions;
export default slice.reducer;

export const loginUser = user =>
    apiRequest({
        url: url.loginUrl,
        method: 'post',
        data: user,
        onStart: setUserLoading.type,
        onSucces: setCurrentUser.type,
        onError: setUserLoadingFail.type
    });
export const signupUser = user =>
    apiRequest({
        url: url.signUpUrl,
        method: 'post',
        data: user,
        onStart: setUserLoading.type,
        onSucces: setCurrentUser.type,
        onError: setUserLoadingFail.type
    });
export const logoutUser = () =>
    apiRequest({
        url: url.logoutUrl,
        method: 'post',
        data: {},
        onSucces: setCurrentUser.type

    });
export const updateUser = user =>
    apiRequest({
        url: url.updateUserUrl,
        method: 'put',
        data: user,
        onSucces: setCurrentUser.type
    })

