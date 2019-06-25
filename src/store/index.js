import { compose, createStore } from 'redux';
import reducers from './reducers';


const store = (initialState = {}) => {
  // Redux Dev-Tools
  const enhancers = [];
  let composeEnhancers = compose;
  if (typeof window !== 'undefined') { // && DEPLOY_ENV_NAME === 'DEVELOPMENT') { // eslint-disable-line no-underscore-dangle
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


  // // Hot loader
  // if (module.hot) {
  //   module.hot.accept('./reducers', () => {
  //     const defaultReducers = require('./reducers').default; // eslint-disable-line global-require
  //     store.replaceReducer(defaultReducers(store.asyncReducers));
  //   });
  // }

  return store;
};


export default store;