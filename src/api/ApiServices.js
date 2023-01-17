import axios from 'axios'

const url = 'http://localhost:5000';

const ApiService = {

    get(ressource) {
        return axios
        .get(`${url}/api/${ressource}`)
    },
    post(ressource, data) {
        return axios
        .post(`${url}/api/${ressource}`, data)
    },
    put(ressource, data) {
        return axios
        .put(`${url}/api/${ressource}`, data)
    },
    delete(ressource, data) {
        return axios
        .delete(`${url}/api/${ressource}/${data}`)
    },
    login(data) {
        return axios
            .post(`${url}/api/auth`, data)
    },
}

export { ApiService }