import { createReducer } from '../../generators/reducers';
import { types } from '../actions/MiddlewareRoute';


const actionHandlers = {
  [types.AXIOS_API_PUREJS_SUCESS]: (state, { response }) => ({ ...state, response, error: null }),
  [types.AXIOS_API_PUREJS_FAILURE]: (state, { response, error }) => ({ ...state, response, error }),
};


const initialState = {
  response: null,
  error: null,
};


const reducer = createReducer(actionHandlers, initialState);
export default reducer;
