import axios from 'axios';

const baseURL = 'http://localhost:3001';

const service = axios.create({
    baseURL,
    withCredentials: true
});


const AUTH_SERVICE = {
    signup(userData) {
        return service.post('/api/signup', userData);
    },
    login(userData) {
        return service.post('/api/login', userData);
    },
    logout() {
        return service.post('/api/logout', {})
    },
    update(userData) {
        console.log("user data in services" + userData)
        return service.post('/api/user/profile', userData, {
            headers: { "Content-Type": "multipart/form-data" }
        })
    }

}

export const PLAID_SERVICE = {
    addAccount(userData) {
        console.log("inside service to make a post to de server for add accounts")
        return service.post('/api/creditcard/add', userData);
    },
    deleteAccount(id) {
        return service.delete(`/api/accounts/:${id}`);
    },
    allAccounts() {
        return service.get('/api/credicard/accounts');
    },
    transactions(data) {
        return service.post('/api/creditcard/transactions', data);
    },
    offBills() {
        return service.get('/api/offlineaccount/bills');
    },
    cardBills() {
        return service.get('/api/offlineaccount/bills');
    },
    paidCard(data) {
        return service.post(`/apid/creditcard/:${data}/paid`, {})
    },
    paidOffCard(data) {
        return service.post(`'/apid/offlineaccount/:${data}/paid'`, {})
    },

}
export const OFFLINE_SERVICE = {
    addAccount(userData) {
        console.log("inside OFF LINEACCOUNT service to add OFFLINE accounts", userData)
        return service.post('/api/offlineaccount', userData);
    },
    deleteAccount(id) {
        console.log("inside OFFLINEACCOUNT service to make a delete to de server for add OFFLINE accounts")
        return service.delete(`/api/offlineaccount/delete/:${id}`);
    },
    allAccounts() {
        console.log("inside all account client axios call")
        return service.get('/api/offlineaccount/accounts');
    },

}

export default AUTH_SERVICE;