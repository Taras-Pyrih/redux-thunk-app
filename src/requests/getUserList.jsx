import axios from 'axios';
import { baseURL } from '../consts/baseURL.jsx';

export const getUserList = () => {
  const instance = axios.create({baseURL: baseURL});
  
  instance.defaults.timeout = 1000;

  return instance.get('/users');
};