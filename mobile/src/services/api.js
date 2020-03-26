import axios from 'axios';

const api = axios.create({
    baseURL: 'http://94fa24ad.ngrok.io'
});

export default api;