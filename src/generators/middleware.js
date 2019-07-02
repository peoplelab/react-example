import jQuery from 'jquery';
import { isObject } from '../utils/checks';

class Middleware {
  constructor(tester, data) {
    if (typeof tester === 'string') {
      this.tester = new RegExp(`^${tester}$`);
    } else if (tester instanceof RegExp) {
      this.tester = tester;
    } else {
      throw new Error('Unexpected type of tester');
    }

    if (typeof data === 'function') {
      this.fn = data;
    } else if (isObject(data)) {
      this.config = data;
    } else {
      throw new Error('Unexpected type of data');
    }
  }

  after = store => next => action => {
    if (!(this.tester.test(action.type))) {
      return;
    }

    const state = store.getState();
    next(action);
    this.fn(state, action);
  }

  before = store => next => action => {
    if (!(this.tester.test(action.type))) {
      return;
    }

    const state = store.getState();
    this.fn(state, action);
    next(action);
  }

  converter = store => next => action => {
    if (!(this.tester.test(action.type))) {
      return;
    }

    const state = store.getState();
    const newAction = this.fn(state, action);
    next(newAction);
  }

  // api = store => () => action => {
  api = () => next => action => {
    if (!(this.tester.test(action.type))) {
      return;
    }

    jQuery
      .ajax(this.config)
      .success((data, textStatus, response) => {
        const newAction = { ...action, success: { data, textStatus, response }};

        next(newAction);
        // store.dispatch(newAction);
      }).error((response, textStatus, err) => {
        const newAction = { ...action, failure: { response, textStatus, err }};

        next(newAction);
        // store.dispatch(newAction);
      });
  }
}

export default Middleware;