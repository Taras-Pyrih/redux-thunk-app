import { DECREMENT, INCREMENT } from "../actionTypes/counterActionTypes.jsx";

const initialState = {
  value: 0
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case DECREMENT:
      return (state.value > 0
        ? {
          ...state,
          value: state.value - action.payload
        }
        : state);
    case INCREMENT:
      return {
        ...state,
        value: state.value + action.payload
      };
    default:
      return state;
  }
};