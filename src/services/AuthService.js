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
    getUser() {
        return service.get('/api/isLoggedIn');
    }


}

export const PLAID_SERVICE = {
    addAccount(userData) {
        return service.post('/api/creditcard/add', userData);
    },
    deleteAccount(id) {
        return service.delete(`/api/plaid/accounts/${id}`);
    },
    allAccounts() {
        return service.get('/api/credicard/accounts');
    },
    transactions(data) {
        return service.post('/api/creditcard/transactions', data);
    },
    cardBills() {
        return service.get('/api/offlineaccount/bills');
    }



}

export default AUTH_SERVICE;