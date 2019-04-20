import axios from 'axios';

const API_URL = 'http://localhost:8000';

export default class PasteCloud {
  constructor() {}

  getPastes(id) {
    return axios
      .get(`${API_URL}/api/paste/${id}`)
      .then(response => response.data)
      .catch(err => console.log(err));
  }
  
  getAllPastes() {
    return axios
      .get(`${API_URL}/api/paste/`)
      .then(response => response.data)
      .catch(err => console.log(err));
  }

  postPaste(paste) {
    return axios
      .post(`${API_URL}/api/paste/`, paste)
      .then(response => response.data)
      .catch(err => console.log(err));
  }

}
