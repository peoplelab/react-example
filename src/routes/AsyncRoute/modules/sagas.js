import {
  put, takeEvery, fork, call,
} from 'redux-saga/effects';
import { types, setGeolocation } from './actions';

const geolocation = async () => new Promise((resolved, rejected) => {
  try {
    if (typeof navigator.geolocation === 'undefined') {
      throw new Error('navigator: unkown "geolocation" property');
    }

    navigator.geolocation.getCurrentPosition(resolved);
  } catch (err) {
    rejected(err);
  }
});

function* doGetGeolocation() {
  const position = yield call(geolocation);
  const { latitude, longitude } = position.coords;
  yield put(setGeolocation(latitude, longitude));
}

function* watchGetGeolocation() {
  yield takeEvery(types.GET_GEOLOCATION, doGetGeolocation);
}


export default [
  fork(watchGetGeolocation),
];
