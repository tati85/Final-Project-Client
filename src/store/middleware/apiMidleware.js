import axios from 'axios';
import * as actions from "../api/api";

const baseURL = 'http://localhost:3001';

const api = ({ dispatch }) => next => async action => {

    if (action.type !== actions.apiRequest.type) return next(action);

    const { url, method, data, onSucces, onError, onStart } = action.payload;
    if (onStart) dispatch({ type: onStart });

    next(action);
    try {
        const respose = await axios.request({
            baseURL,
            url,
            method,
            withCredentials: true,
            data
        });
        dispatch(actions.apiSucces(respose.data))
        if (onSucces) dispatch({ type: onSucces, payload: respose.data });

    } catch (err) {
        dispatch(actions.apiFail(err.message));
        if (onError) dispatch({ type: onError, payload: err.message });


    }




}

