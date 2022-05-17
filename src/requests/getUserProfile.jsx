import axios from 'axios';
import { baseURL } from "../consts/baseURL.jsx";

export const getUserProfile = id => {
  axios.defaults.baseURL = baseURL;

  return axios.get(`/users/${id}`);
};