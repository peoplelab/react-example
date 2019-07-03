import { createReducer } from '../../generators/reducers';
import { types } from '../actions/ReduxStore';


const actionHandlers = {
  [types.CHANGE_COLOR]: (state, { payload }) => ({ ...state, ...payload }),
  [types.UPDATE_VALUE]: (state, { payload }) => ({ ...state, ...payload }),
  [types.SET_VISIBILITY]: (state, { payload }) => ({ ...state, ...payload }),
};


const initialState = {
  color: 1,
  // value: '',
  visible: false,
};


const reducer = createReducer(actionHandlers, initialState);
export default reducer;
