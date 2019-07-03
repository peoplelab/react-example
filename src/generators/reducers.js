/* eslint-disable import/prefer-default-export */
export const createReducer = (actionHandlers, initialState) => (state = initialState, action) => {
  const handler = actionHandlers[action.type];

  return typeof handler === 'function' ? handler(state, action) : state;
};
