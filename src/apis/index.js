import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export const login = ({ username, password }) =>
  api.post('/login', JSON.stringify({ username, password })).then((res) => res.data);

export const loginWithFB = (accessToken) => api.get(`/auth/facebook?access_token=${accessToken}`);

export const loginWithGoogle = (idToken) => api.get(`/auth/google/?access_token=${idToken}`);

export const logout = ({ username, password }) =>
  api.post('/logout', JSON.stringify({ username, password })).then((res) => res.data);
