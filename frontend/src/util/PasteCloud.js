import axios from 'axios';
axios.defaults.xsrfHeaderName = "X-CSRFToken"
axios.defaults.xsrfCookieName = 'csrftoken'

const API_URL = 'http://localhost:8000';

export default class PasteCloud {
    constructor() { };

    getPastes() {

    }

    postPaste(paste) {
        return axios
            .post(`${API_URL}/api/paste`, paste)
            .then(response => response.data);
    }
}