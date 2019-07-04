import { createReducer } from '../../generators/reducers';
import { types } from '../actions/PureJS';


const actionHandlers = {
  [types.JQUERY_API_PUREJS_SUCCESS]: (state, { response }) => ({ ...state, response, error: null }),
  // eslint-disable-next-line max-len
  [types.JQUERY_API_PUREJS_FAILURE]: (state, { response, error }) => ({ ...state, response, error }),
};


const initialState = {
  response: null,
  error: null,
};


const reducer = createReducer(actionHandlers, initialState);
export default reducer;
