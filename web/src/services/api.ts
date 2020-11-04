import axios from 'axios';

const url = 'http://192.168.15.44:3333'

const api = axios.create({
  baseURL: url
});

export default api;
