import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
} from './types';
import * as api from '../apis';
import history from '../history';

export const fetchUser = () => async (dispatch) => {
  dispatch({ type: FETCH_USER_REQUEST });
  try {
    const res = await api.fetchUser();
    dispatch({ type: FETCH_USER_SUCCESS, payload: res });
  } catch (error) {
    dispatch({ type: FETCH_USER_FAILURE, payload: error.message });
  }
};

export const updateUser = (todo) => async (dispatch) => {
  dispatch({ type: UPDATE_USER_REQUEST });
  try {
    const res = await api.updateUser(todo);
    dispatch({ type: UPDATE_USER_SUCCESS, payload: res });
    history.push('/todos');
  } catch (error) {
    dispatch({ type: UPDATE_USER_FAILURE, payload: error.message });
  }
};
