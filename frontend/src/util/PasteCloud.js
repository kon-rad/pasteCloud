import axios from 'axios';

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