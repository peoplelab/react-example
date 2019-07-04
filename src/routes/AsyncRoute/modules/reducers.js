import { createReducer } from '../../../generators/reducers';
import { types } from './actions';


const actionHandlers = {
  [types.SET_GEOLOCATION]: (state, { payload }) => ({ ...state, ...payload }),
};


const initialState = {
  latitude: 0,
  longitude: 0,
};


const reducer = createReducer(actionHandlers, initialState);
export default reducer;
