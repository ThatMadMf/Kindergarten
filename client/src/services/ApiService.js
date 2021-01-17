import Axios from 'axios';

const api = 'http://localhost:8000/api/';

export const getAuthHeaders = () => {
    return {
        headers: {
            Authorization: localStorage.getItem('token'),
        },
    };
}

export const ApiService = {
    get(path) {
        return Axios.get(api + path, getAuthHeaders());
    },
    post(path, data) {
        return Axios.post(api + path, data, getAuthHeaders());
    },
}