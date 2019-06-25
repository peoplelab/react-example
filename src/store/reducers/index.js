import { combineReducers } from 'redux';
import Home from './home';
import ReduxStore from './ReduxStore';


export const mainReducer = combineReducers({
  Home,
  ReduxStore,
});


export default mainReducer;
