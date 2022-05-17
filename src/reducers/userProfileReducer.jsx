import { PROFILE_SUCCESS, PROFILE_FAILURE } from "../actionTypes/requestActionTypes.jsx";

const initialState = {
  profile: {},
  isReady: false,
  notification: 'Завантаження профайлу користувача...'
};

export const userProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_SUCCESS:
      return {
        ...state,
        profile: action.data,
        isReady: true,
        notification: ''
      };
    case PROFILE_FAILURE:
      return {
        ...state,
        profile: {},
        isReady: false,
        notification: action.message
      };
    default:
      return state;
  }
};