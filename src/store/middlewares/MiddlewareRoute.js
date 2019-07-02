import { pathOr } from 'ramda';
import { createMiddleware } from '../../generators/middleware';
import { types, saveApiResponse } from '../actions/MiddlewareRoute';
import { jQueryApi, axiosApi_promise, axiosApi_async } from '../../api/test';


const actionHandlers = {
  [types.CALL_JQUERY_API]: (action, store) => {
    jQueryApi(store, types.DONE_API);
  },
  [types.CALL_AXIOS_API_PROMISE]: (action, store) => {
    axiosApi_promise(store, types.DONE_API);
  },
  [types.CALL_AXIOS_API_ASYNC]: (action, store) => {
    axiosApi_async(store, types.DONE_API);
  },
  [types.DONE_API]: (action, store) => {
    // eslint-disable-next-line no-console
    console.log(action);
    const response = pathOr(null, ['success', 'response'], action) || pathOr({}, ['failure', 'response'], action);
    const str = JSON.stringify(response);
    const newAction = saveApiResponse(str);

    store.dispatch(newAction);
  },
};


const middleware = createMiddleware(actionHandlers);
export default middleware;
