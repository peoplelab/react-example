import { createMiddleware } from '../../generators/middleware';
import { types, saveApiResponse } from '../actions/MiddlewareRoute';
import { jQueryApi, axiosApi_promise, axiosApi_async } from '../../api/test';


const actionHandlers = {
  [types.CALL_JQUERY_API]: (action, store) => {
    jQueryApi(store, types.DONE_JQUERY_API);
    // axiosApi_promise(store, types.DONE_JQUERY_API);
    // axiosApi_async(store, types.DONE_JQUERY_API);
  },
  [types.DONE_JQUERY_API]: (action, store) => {
    const response = action.success.response || action.failure.response || {};
    const str = JSON.stringify(response);
    const newAction = saveApiResponse(str);

    store.dispatch(newAction);
  },
};


const middleware = createMiddleware(actionHandlers);
export default middleware;
