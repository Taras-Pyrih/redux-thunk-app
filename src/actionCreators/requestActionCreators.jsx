import { SUCCESS, FAILURE } from "../actionTypes/requestActionTypes.jsx";

export const requestSucceeded = data => {
  return { type: SUCCESS, data };
};

export const requestFailed = message => {
  return { type: FAILURE, message };
};