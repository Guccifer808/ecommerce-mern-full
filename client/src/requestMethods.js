import axios from 'axios';

//creating reusable axios URL
//admin token
const BASE_URL = 'http://localhost:5000/api';
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTg0ZmNkMWI3NmM3NjgxZWY2YzAwMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MjA2OTczOSwiZXhwIjoxNjcyMTU2MTM5fQ.8kW6QSc1UcGjQgCxq8y7_d2VOoqXHriCpKAp8x0lRxg';

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
