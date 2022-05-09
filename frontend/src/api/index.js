import axios from 'axios';

const API_BASE_URL = 'http://k6c101.p.ssafy.io:8080';
const ACCESS_TOKEN = 'jwt';

export function apiInstance() {
  const instance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
      jwtoken: `${localStorage.getItem(ACCESS_TOKEN)}`,
    },
  });
  return instance;
}
