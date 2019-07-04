import {
  applyMiddleware, compose, createStore,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import middlewares from './middlewares';
import reducers from './reducers';
import sagas from './sagas';


const { NODE_ENV } = process.env;

const storeConstructor = (initialState = {}) => {
  // Redux Dev-Tools
  // const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const composeEnhancers = (
    typeof window === 'object'
    && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    && NODE_ENV !== 'PRODUCTION'
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : compose
  );

  // Saga middleware
  const saga = createSagaMiddleware();

  // Enhancer
  const enhancer = composeEnhancers(applyMiddleware(saga, ...middlewares));

  // Create store
  const store = createStore(reducers, initialState, enhancer);

  // Run sagas
  store.runSaga = saga.run;
  store.runSaga(sagas);

  // Hot loader
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      // eslint-disable-next-line global-require
      const hotReducers = require('./reducers').default;
      store.replaceReducer(hotReducers());
      // const { asyncReducers } = store;
      // store.replaceReducer(hotReducers(asyncReducers));
    });
  }

  return store;
};


export default storeConstructor;
