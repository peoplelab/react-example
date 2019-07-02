import { combineReducers } from 'redux';
import Home from './home';
import ReduxStore from './ReduxStore';
import MiddlewareRoute from './MiddlewareRoute';


export const mainReducer = combineReducers({
  Home,
  ReduxStore,
  MiddlewareRoute,
});


export default mainReducer;
