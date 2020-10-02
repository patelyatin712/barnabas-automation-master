import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': process.env.REACT_APP_AUTH_TOKEN
  },
  timeout: 5000,
});

export default instance;
