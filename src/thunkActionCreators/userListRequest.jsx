import { getUserList } from '../requests/getUserList.jsx';
import { requestStarted } from "./requestStarted.jsx";
import { requestFinished } from "./requestFinished.jsx";
import { requestSucceeded, requestFailed } from '../actionCreators/requestActionCreators.jsx';

export const userListRequest = () => dispatch => {
  console.clear();

  return getUserList().then(
    response => {
      dispatch(requestStarted('Стан сховища перед запитом'));
      dispatch(requestSucceeded(response.data));  
      dispatch(requestFinished('Стан сховища після запиту'));
    },
    error => {
      dispatch(requestStarted('Стан сховища перед запитом'));
      dispatch(requestFailed(error.message));
      dispatch(requestFinished('Стан сховища після запиту'));
    }
  );
};