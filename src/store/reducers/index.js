import { combineReducers } from 'redux';
import Home from './home';
import ReduxStore from './ReduxStore';
import MiddlewareRoute from './MiddlewareRoute';
import PureJS from './PureJS';
import SagasRoute from './SagasRoute';


export const mainReducer = combineReducers({
  Home,
  ReduxStore,
  MiddlewareRoute,
  PureJS,
  SagasRoute,
});


export default mainReducer;
