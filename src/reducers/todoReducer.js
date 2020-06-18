import { FETCH_TODOS_SUCCESS, CREATE_TODO_SUCCESS, UPDATE_TODO_SUCCESS } from '../actions/types';

const initialState = [];

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_TODOS_SUCCESS:
      return payload;
    case CREATE_TODO_SUCCESS:
      return [...state, payload];
    case UPDATE_TODO_SUCCESS:
      return state.map((todo) => (todo.id === payload.id ? payload : todo));
    default:
      return state;
  }
};
