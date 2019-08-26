import React, { Component } from 'react';
import { Provider } from 'react-redux';              // Gestore della connessione tra React e Redux store
import { Router } from "react-router";               // Gestore della navigazione
import { hot } from 'react-hot-loader/root';         // Gestore dell'hot-reloading dell'applicativo
import Main from './Main.container';                 // Gestore delle route
import history from '../models/common/history';      // Gestore della store del browser
import { getUserIP } from '../models/common/userIP'; // Gestore dell'indirizzo IP dell'utente
import store from '../store/redux.store';            // Store globale

import '../styles/main.scss'; // Applica il css comune all'applicativo


class AppComponent extends Component {
  componentDidMount() {
    // Viene recuperato l'indirizzo IP dell'utente e salvato nello store
    getUserIP();
  }

  render() {

    // Definizione della struttura base dell'applicativo
    return (
      <Provider store={store}>
        <Router history={history}>
          <Main />
        </Router>
      </Provider>
    );
  }
}


AppComponent.propTypes = {
};

AppComponent.defaultProps = {
};


export default hot(AppComponent);
