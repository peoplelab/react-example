import { compose, createStore } from 'redux';
import reducers from './reducers';


const store = (initialState = {}) => {
  let composeEnhancers = compose;

  // Redux Dev-Tools
  const enhancers = [];
  // eslint-disable-next-line no-undef
  if (typeof window !== 'undefined' && process.env.NODE_ENV !== 'PRODUCTION') {
    const composeWithDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__; // eslint-disable-line no-underscore-dangle

    if (typeof composeWithDevToolsExtension === 'function') {
      composeEnhancers = composeWithDevToolsExtension;
    }
  }


  // Create store
  const store = createStore(
    reducers,
    initialState,
    composeEnhancers(...enhancers),
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