import axios from 'axios';

const ApiService = {
    init() {
        axios.defaults.baseURL = 'http://localhost:3000';
    },

    get(resource) {
        return axios.get(resource);
    },

    post(resource, data) {
        return axios.post(resource, data);
    },

    patch(resource, data) {
        return axios.patch(resource, data);
    },

    delete(resource) {
        return axios.delete(resource);
    },
};

export default ApiService;
