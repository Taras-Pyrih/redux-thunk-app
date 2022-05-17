import { SUCCESS, FAILURE, PROFILE_SUCCESS, PROFILE_FAILURE } from "../actionTypes/requestActionTypes.jsx";

export const requestSucceeded = data => {
  return { type: SUCCESS, data };
};

export const requestFailed = message => {
  return { type: FAILURE, message };
};

export const profileRequestSucceeded = data => {
  return { type: PROFILE_SUCCESS, data }
};

export const profileRequestFailed = message => {
  return { type: PROFILE_FAILURE, message }
};