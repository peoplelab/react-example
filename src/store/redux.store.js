//----------------------------------------------------------------------------------------
// File: redux.store.js
//
// Desc: Inizializzazione delle store globale tramite la libreria di Redux
// Path: /src/store/redux.store
//----------------------------------------------------------------------------------------


import { compose, createStore } from 'redux';
import { reducer } from './session.store';

// Stato iniziale
const initialState = {};


// Gestione del plug-in di debug
const composeEnhancers = (
  typeof window === 'object'
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  && !IS_PRODUCTION
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose
);


// Inizializzazione middleware
const enhancer = composeEnhancers();


// Inizializzazione dello store
const store = createStore(reducer, initialState, enhancer);


// Abilitazione dell'hot-reload per lo store
if (module.hot) {
  module.hot.accept('./session.store', () => {
    store.replaceReducer(reducer);
  });
}


export default store;
