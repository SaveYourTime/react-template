import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
} from './types';
import * as api from '../apis';
import history from '../history';

export const login = ({ username, password }) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    const res = await api.login({ username, password });
    dispatch({ type: LOGIN_SUCCESS, payload: res });
    history.push('/protected');
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, payload: error.message });
  }
};

export const logout = () => async (dispatch) => {
  dispatch({ type: LOGOUT_REQUEST });
  try {
    await api.logout();
    dispatch({ type: LOGOUT_SUCCESS });
    history.push('/login');
  } catch (error) {
    dispatch({ type: LOGOUT_FAILURE, payload: error.message });
  }
};
