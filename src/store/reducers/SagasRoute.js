import { createReducer } from '../../generators/reducers';
import { types } from '../actions/MiddlewareRoute';


const actionHandlers = {
  [types.AXIOS_API_SAGAS_SUCESS]: (state, { response }) => ({ ...state, response, error: null }),
  [types.AXIOS_API_SAGAS_FAILURE]: (state, { response, error }) => ({ ...state, response, error }),
};


const initialState = {
  response: null,
  error: null,
};


const reducer = createReducer(actionHandlers, initialState);
export default reducer;
