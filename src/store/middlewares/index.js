import reporters from './reporters';
import { jQueryApiMW } from './MiddlewareRoute';


export const middlewaresList = [
  ...reporters,
  jQueryApiMW
];


export default middlewaresList;
