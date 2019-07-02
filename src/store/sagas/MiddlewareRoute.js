import { put, takeEvery, fork, call } from 'redux-saga/effects';
import { types, doneApi } from '../actions/MiddlewareRoute';
import { axiosApi_saga, jQueryApi_saga } from '../../api/test';


export function* doAxiosApiSaga(action) {
  const { payload } = action;
  const result = yield call(axiosApi_saga);
  const { error } = result;

  const key = !error ? 'success' : 'failure';

  yield put(doneApi({ [key]: result }, payload));
}

export function* watchAxiosApiSaga() {
  yield takeEvery(types.CALL_AXIOS_API_SAGA, doAxiosApiSaga);
}


export function* dojQueryApiSaga(action) {
  const { payload } = action;
  const result = yield call(jQueryApi_saga);

  yield put(doneApi(result, payload));
}

export function* watchjQueryApiSaga() {
  yield takeEvery(types.CALL_JQUERY_API_SAGA, dojQueryApiSaga);
}


export default [
  fork(watchAxiosApiSaga),
  fork(watchjQueryApiSaga),
];
