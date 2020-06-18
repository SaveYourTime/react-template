import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export const login = ({ username, password }) =>
  api.post('/login', JSON.stringify({ username, password })).then((res) => res.data);

export const logout = ({ username, password }) =>
  api.post('/logout', JSON.stringify({ username, password })).then((res) => res.data);
