import {
  applyMiddleware, compose, createStore,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import middlewares from './middlewares';
import reducers from './reducers';
import sagas from './sagas';


const { NODE_ENV } = process.env;

const storeConstructor = (initialState = {}) => {
  let composeEnhancers = compose;

  // Redux Dev-Tools
  const enhancers = [];
  if (typeof window !== 'undefined' && (NODE_ENV === 'MOCKS' || NODE_ENV === 'DEVELOPMENT')) {
    // eslint-disable-next-line no-underscore-dangle
    const composeWithDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

    if (typeof composeWithDevToolsExtension === 'function') {
      composeEnhancers = composeWithDevToolsExtension;
    }
  }

  // Saga middleware
  const saga = createSagaMiddleware();

  // Create store
  const store = createStore(
    reducers,
    initialState,
    composeEnhancers(
      applyMiddleware(saga, ...middlewares),
      ...enhancers,
    ),
  );

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
