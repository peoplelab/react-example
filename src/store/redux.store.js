//---------------------------------------------------------------------------------------------------
// File: redux.store.js
//
// Desc: Entry point dello store globale dell'applicazione
// Path: /src/store/redux.store
//---------------------------------------------------------------------------------------------------


import { compose, createStore } from 'redux'; // Import dei componneti di redux
import { reducer } from './session.store';    // Import del reducer della sessione per la gestione dello store


// Stato iniziale dello store
const initialState = {};


// Gestione del plug-in di middleware per il debug dello store e delle azioni applicatevi
const composeEnhancers = (
  typeof window === 'object'
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  && !IS_PRODUCTION
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose
);


// Inizializzazione del middleware
const enhancer = composeEnhancers();


// Inizializzazione dello store
const store = createStore(reducer, initialState, enhancer);


// Abilitazione dell'hot-reload dello store
if (module.hot) {
  module.hot.accept('./session.store', () => {
    store.replaceReducer(reducer);
  });
}


export default store;
