import Middleware from '../../generators/middleware';
import { types } from '../actions/MiddlewareRoute';
import { jQueryApiconfig } from '../../api/test';

const jQueryApiMW = new Middleware(types.CALL_JQUERY_API, jQueryApiconfig).api;


export {
  jQueryApiMW
};