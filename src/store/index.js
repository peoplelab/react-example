import {
  applyMiddleware,
  compose,
  createStore
} from 'redux';
import middlewares from './middlewares';
import reducers from './reducers';


const { NODE_ENV } = process.env;

const store = (initialState = {}) => {
  let composeEnhancers = compose;

  // Redux Dev-Tools
  const enhancers = [];
  if (typeof window !== 'undefined' && (NODE_ENV === 'MOCKS' || NODE_ENV === 'DEVELOPMENT')) {
    const composeWithDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__; // eslint-disable-line no-underscore-dangle

    if (typeof composeWithDevToolsExtension === 'function') {
      composeEnhancers = composeWithDevToolsExtension;
    }
  }

  // Create store
  const store = createStore(
    reducers,
    initialState,
    composeEnhancers(
      applyMiddleware(...middlewares),
      ...enhancers
    ),
  );


  // Hot loader
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const hotReducers = require('./reducers').default;
      store.replaceReducer(hotReducers());
      // const { asyncReducers } = store;
      // store.replaceReducer(hotReducers(asyncReducers));
    });
  }

  return store;
};


export default store;