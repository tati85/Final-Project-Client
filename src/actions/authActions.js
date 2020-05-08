import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { AUTH_SERVICE } from '../services/AuthService';
import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from "./types";



// Register User
export const registerUser = (userData) => dispatch => {
    AUTH_SERVICE.signup(userData)
        .then(res =>
            dispatch(setCurrentUser(res.data))
                .catch(err =>
                    dispatch({
                        type: GET_ERRORS,
                        payload: err.response.data
                    })
                )
        )
};

// Login 
export const loginUser = userData => dispatch => {
    AUTH_SERVICE.login(userData)
        .then(res => {

            dispatch(setCurrentUser(res.data));
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

// Set logged in user
export const setCurrentUser = user => {
    return {
        type: SET_CURRENT_USER,
        payload: user
    };
};

// User loading
export const setUserLoading = () => {
    return {
        type: USER_LOADING
    };
};

// Log user out
export const logoutUser = () => dispatch => {

    dispatch(setCurrentUser({}));
};