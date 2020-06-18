import { LOGIN_SUCCESS, LOGOUT_SUCCESS, LOGOUT_FAILURE } from '../actions/types';

const initialState = {
  id: null,
  username: '',
  token: null,
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_SUCCESS:
      return { id: payload.id, username: payload.username, token: payload.token };
    case LOGOUT_SUCCESS:
    case LOGOUT_FAILURE:
      return initialState;
    default:
      return state;
  }
};
