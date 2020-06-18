export default (state = {}, action) => {
  const { type } = action;
  const actionName = type.replace(/_REQUEST|_SUCCESS|_FAILURE/gi, '');

  if (type.endsWith('_REQUEST')) {
    return { ...state, [actionName]: true };
  }

  if (type.endsWith('_SUCCESS') || type.endsWith('_FAILURE')) {
    return { ...state, [actionName]: false };
  }

  return state;
};
