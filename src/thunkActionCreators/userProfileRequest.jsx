import { getUserProfile } from '../requests/getUserProfile.jsx';
import { requestStarted } from "./requestStarted.jsx";
import { requestFinished } from "./requestFinished.jsx";
import { profileRequestFailed, profileRequestSucceeded } from '../actionCreators/requestActionCreators.jsx';

export const userProfileRequest = id => async dispatch => {
  console.clear();

  dispatch(requestStarted('Стан сховища перед запитом'));

  let response;

  try {
    response = await getUserProfile(id);
  } catch(error) {
    dispatch(profileRequestFailed(error.message));
    dispatch(requestFinished('Стан сховища після запиту'));

    return Promise.resolve();
  }
  
  dispatch(profileRequestSucceeded(response.data));
  dispatch(requestFinished('Стан сховища після запиту'));
};