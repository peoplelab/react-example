import { createReducer } from '../../generators/reducers';
import { types } from '../actions/ReduxStore';


const actionHandlers = {
  [types.SAVE_API_RESPONSE]: (state, { payload }) => ({ ...state, ...payload }),
};


const initialState = {
  response: ''
};


const reducer = createReducer(actionHandlers, initialState);
export default reducer;
