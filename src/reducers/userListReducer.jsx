import { SUCCESS, FAILURE } from "../actionTypes/requestActionTypes.jsx";

const initialState = {
  users: [],
  isReady: false,
  notification: 'Завантаження списку користувачів...'
};

export const userListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS:
      return {
        ...state,
        users: action.data,
        isReady: true,
        notification: ''
      };
    case FAILURE:
      return {
        ...state,
        users: [],
        isReady: false,
        notification: action.message
      };
    default:
      return state;
  }
};