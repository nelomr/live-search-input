import axios from 'axios';
const HOST = 'https://swapi.dev/api/';

let client = axios.create({
  baseURL: HOST,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

export default client;