import { compose, createStore } from 'redux';
import { reducer } from './session.store';

// initial state
const initialState = {};


// debugger
const composeEnhancers = (
  typeof window === 'object'
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  && !IS_PRODUCTION
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose
);


// Enhancer
const enhancer = composeEnhancers();


// Create store
const store = createStore(reducer, initialState, enhancer);


// Hot loader
if (module.hot) {
  module.hot.accept('./session.store', () => {
    store.replaceReducer(reducer);
  });
}


export default store;
