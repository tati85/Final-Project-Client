import axios from 'axios';

const baseURL = 'http://localhost:3001';

const service = axios.create({
    baseURL,
    withCredentials: true
});

const AUTH_SERVICE = {
    singup(userData) {
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

export default AUTH_SERVICE;