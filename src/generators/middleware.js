export const createMiddleware = actionHandlers => store => next => action => {
  const handler = actionHandlers[action.type];

  const newAction = typeof handler === 'function' && handler(action, store) || action;

  return next(newAction);
};
