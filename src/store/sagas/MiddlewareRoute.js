import { put, takeEvery, fork, call } from 'redux-saga/effects';
import { types, doneJqueryApi } from '../actions/MiddlewareRoute';
import { axiosApi_saga } from '../../api/test';


export function* doCalljQueryApi(action) {
  const { payload } = action;

  const response = yield call(axiosApi_saga);

  yield put(doneJqueryApi(response, payload));
}

export function* watchCalljQueryApi() {
  yield takeEvery(types.CALL_JQUERY_API, doCalljQueryApi);
}


export default [
  fork(watchCalljQueryApi),
];
