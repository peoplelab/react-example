import { createReducer } from '../../generators/reducers';
// import { types } from '../actions/home';


const actionHandlers = {
  // [types.UPDATE_TEXT]: (state, { payload }) => ({ ...state, ...payload }),
};


const initialState = {
  // number: 0,
  // value: '',
};


const reducer = createReducer(actionHandlers, initialState);
export default reducer;
