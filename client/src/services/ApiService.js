import Axios from 'axios';

const api = 'http://localhost:3000/api';

export const ApiService = {
    get(path) {
        return Axios.get(api + path);
    },
    post(path, data) {
        return Axios.post(api + path, data);
    },
}