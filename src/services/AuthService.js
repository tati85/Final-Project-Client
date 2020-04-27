import axios from 'axios';

const BASE_URL = process.env.REACT_APP_SERVER_POINT;

const service = axios.create({
    BASE_URL,
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
    getUser(){
        return service.get('/api/isLoggedIn');
    }


}

export default AUTH_SERVICE;