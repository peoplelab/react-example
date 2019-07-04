import { all, cancel } from 'redux-saga/effects';


const root = sagas => (
  // eslint-disable-next-line func-names
  function* () {
    yield all(sagas);
  }
);


class SagaHandler {
  constructor(saga) {
    this.saga = saga;
    this.task = {};
  }

  run(key, sagas) {
    this.task[key] = this.saga.run(root(sagas));
  }

  stop(key) {
    if (this.task[key] === null) {
      return;
    }

    cancel(this.task[key]);
  }
}


export default SagaHandler;
