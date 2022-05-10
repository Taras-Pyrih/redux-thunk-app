import { combineReducers } from 'redux';
import { counterReducer } from './counterReducer.jsx';
import { userListReducer } from './userListReducer.jsx';

export const rootReducer = combineReducers({
  counterState: counterReducer,
  userListState: userListReducer
});