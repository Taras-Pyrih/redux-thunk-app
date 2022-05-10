import axios from 'axios';
import { baseURL } from '../consts/baseURL.jsx';
import { requestStarted } from "./requestStarted.jsx";
import { requestFinished } from "./requestFinished.jsx";
import { requestSucceeded, requestFailed } from '../actionCreators/requestActionCreators.jsx';

export const userListRequest = () => (dispatch, getState) => {
  console.clear();
  
  const instance = axios.create({baseURL: baseURL});
  
  instance.defaults.timeout = 1000;

  dispatch(requestStarted('1'));

  instance.get('/users').then(
    response => {
      //dispatch(requestStarted('Стан сховища перед запитом'));
      dispatch(requestSucceeded(response.data));  
      //dispatch(requestFinished('Стан сховища після запиту'));
    },
    error => {
      //dispatch(requestStarted('Стан сховища перед запитом'));
      dispatch(requestFailed(error.message));
      //dispatch(requestFinished('Стан сховища після запиту'));
    }
  ).then(() => console.log('Done!'));

  dispatch(requestFinished('2'));
};