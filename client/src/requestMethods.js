import axios from 'axios';

//creating reusable axios URL
//admin token
const BASE_URL = 'http://localhost:5000/api';
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user)
  .currentUser.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
