import { all } from 'redux-saga/effects';

import MiddlewareRoute from './MiddlewareRoute';


export default function* root() {
  yield all([
    ...MiddlewareRoute,
  ]);
}
