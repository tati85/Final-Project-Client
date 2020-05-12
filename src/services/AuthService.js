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
        service.patch('/api/user/profile', userData)
    }

}

export const PLAID_SERVICE = {
    addAccount(userData) {
        console.log("inside service to make a post to de server for add accounts")
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
    offBills() {
        return service.get('/api/offlineaccount/bills');
    },
    cardBills() {
        return service.get('/api/offlineaccount/bills');
    }



}

export default AUTH_SERVICE;