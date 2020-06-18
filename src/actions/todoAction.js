import {
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE,
  CREATE_TODO_REQUEST,
  CREATE_TODO_SUCCESS,
  CREATE_TODO_FAILURE,
  UPDATE_TODO_REQUEST,
  UPDATE_TODO_SUCCESS,
  UPDATE_TODO_FAILURE,
} from './types';
import * as api from '../apis';
import history from '../history';

export const fetchTodos = () => async (dispatch) => {
  dispatch({ type: FETCH_TODOS_REQUEST });
  try {
    const res = await api.fetchTodos();
    dispatch({ type: FETCH_TODOS_SUCCESS, payload: res });
  } catch (error) {
    dispatch({ type: FETCH_TODOS_FAILURE, payload: error.message });
  }
};

export const createTodo = (todo) => async (dispatch) => {
  dispatch({ type: CREATE_TODO_REQUEST });
  try {
    const res = await api.createTodo(todo);
    dispatch({ type: CREATE_TODO_SUCCESS, payload: res });
    history.push('/todos');
  } catch (error) {
    dispatch({ type: CREATE_TODO_FAILURE, payload: error.message });
  }
};

export const updateTodo = () => async (todo) => async (dispatch) => {
  dispatch({ type: UPDATE_TODO_REQUEST });
  try {
    const res = await api.updateTodo(todo);
    dispatch({ type: UPDATE_TODO_SUCCESS, payload: res });
    history.push(`/todos/${res.id}`);
  } catch (error) {
    dispatch({ type: UPDATE_TODO_FAILURE, payload: error.message });
  }
};
