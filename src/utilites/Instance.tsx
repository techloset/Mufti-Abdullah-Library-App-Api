import axios from "axios";

const instance = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': process.env.REACT_APP_API_KEY,
  },
});

export default instance;
