

import AUTH_SERVICE from '../services/AuthService';
import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from "./types";



// Register User
export const registerUser = (userData) => dispatch => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, 10);
    }).then(() => {
        dispatch({ type: 'ACTION_TYPE' });
    });

    AUTH_SERVICE.signup(userData)
        .then(res => {
            console.log("insidie singpu");
            dispatch(setCurrentUser(res.data))
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        )

};

// Login 
export const loginUser = userData => dispatch => {


    AUTH_SERVICE.login(userData)
        .then(res => {
            console.log(res.data + "respose from login user")

            dispatch(setCurrentUser(res.data));
        })
        .catch(err => {

            console.log(err + "*************error from authaction.loginUser")
            dispatch({
                type: GET_ERRORS,
                payload: err.data
            })

        }
        );
};
//updated user information
export const updateUser = userData => dispatch => {
    AUTH_SERVICE.update(userData
        .then(res => {
            dispatch(setCurrentUser(res.data))
        })
        .catch((err) => { }))
}

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