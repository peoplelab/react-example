import { all } from 'redux-saga/effects';

import MiddlewareRoute from './MiddlewareRoute';
import SagasRoute from './SagasRoute';


export default function* root() {
  yield all([
    ...MiddlewareRoute,
    ...SagasRoute,
  ]);
}
