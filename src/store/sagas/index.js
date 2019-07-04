import MiddlewareRoute from './MiddlewareRoute';
import SagasRoute from './SagasRoute';


export default [
  ...MiddlewareRoute,
  ...SagasRoute,
];
