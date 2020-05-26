
import { combineReducers } from "redux";
import { authReducer } from "./auth/authorization";
import { creditReducer } from "./creditCards/creditCardAccounts";
import { offlineReducer } from "./offlineAccounts/offlineAccounts";




export default combineReducers({
    auth: authReducer,
    credit: creditReducer,
    offline: offlineReducer
})