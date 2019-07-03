/* eslint-disable camelcase */
import {
  put, takeEvery, fork, call,
} from 'redux-saga/effects';
import { types, AxiosApiSagas } from '../actions/SagasRoute';
import * as api from '../../api/sagasServices';


export function* doAxiosApiSaga(action) {
  const { payload } = action;
  yield put(AxiosApiSagas.request(payload));

  const { response, error } = yield call(api.axiosCall);

  if (!error) {
    yield put(AxiosApiSagas.success(response));
  } else {
    yield put(AxiosApiSagas.failure(response, error));
  }
}

export function* watchAxiosApiSaga() {
  yield takeEvery(types.CALL_AXIOS_API_SAGAS, doAxiosApiSaga);
}


export default [
  fork(watchAxiosApiSaga),
];
