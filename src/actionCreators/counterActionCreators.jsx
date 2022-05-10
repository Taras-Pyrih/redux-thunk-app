import { DECREMENT, INCREMENT } from "../actionTypes/counterActionTypes.jsx";

export const decrementActionCreator = amount => {
  return {type: DECREMENT, payload: amount};
};

export const incrementActionCreator = amount => {
  return {type: INCREMENT, payload: amount};
};