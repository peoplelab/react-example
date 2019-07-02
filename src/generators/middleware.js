export const createMiddleware = actionHandlers => store => next => action => {
  const handler = actionHandlers[action.type];
  // eslint-disable-next-line no-console
  console.log(action);
  const newAction = typeof handler === 'function' && handler(action, store) || action;

  return next(newAction);
};
