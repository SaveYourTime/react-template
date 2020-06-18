export default (state = {}, action) => {
  const { type, payload } = action;
  const actionName = type.replace(/_REQUEST|_SUCCESS|_FAILURE/gi, '');

  if (type.endsWith('_REQUEST')) {
    return { ...state, [actionName]: '' };
  }

  if (type.endsWith('_FAILURE')) {
    return { ...state, [actionName]: payload };
  }

  return state;
};
