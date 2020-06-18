import { combineReducers } from 'redux';
import authReducer from './authReducer';
import todoReducer from './todoReducer';
import errorReducer from './errorReducer';
import pendingReducer from './pendingReducer';

export default combineReducers({
  auth: authReducer,
  todo: todoReducer,
  error: errorReducer,
  pending: pendingReducer,
});
