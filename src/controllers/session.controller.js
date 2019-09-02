//----------------------------------------------------------------------------------------
// File: session.controller.js
//
// Path: /src/controllers/session.controller
//----------------------------------------------------------------------------------------


import moment from 'moment';
import { base } from './common/controller.base';
import { apiRefresh } from '../models/session.model';
import store from '../store/redux.store';
import { types } from '../store/session.store';
import history from '../models/common/history';


// dato un determinato lasso di tempo, allo scadere di quest'ultimo, verifica se la sessione utente è ancora valida
export const SessionValidity = () => {
  const { refreshExpiredAt } = store.getState();

  // const token = moment(expiredAt);
  const refresh = moment(refreshExpiredAt);
  const login = moment();

  let timeout = refresh.diff(login).valueOf();
  timeout = timeout > 0 ? timeout : 0;

  console.log('> session timeout - ', refreshExpiredAt, ' - ', timeout + ' ms');

  const timer = setTimeout(() => {
    store.dispatch({ type: types.RESET_SESSION });
    history.replace('/login');
    console.log('> session timeout - done');
  }, timeout);

  return timer;
};

// chimata per il refresh automatico della sessione utentete
// al successo della chiamata, esegue un nuovo tentativo di connessione all'api rifiutata in precedenza
export const callRefresh = async ({ base: callback, ...args }) => {
  const { refreshToken } = store.getState();

  const request = {
    RefreshToken: refreshToken,
  };

  base({
    request,
    api: apiRefresh,
    success: ({ jsondata }) => {
      store.dispatch({
        type: types.SET_SESSION,
        payload: jsondata,
      });

      callback(...args);
    },
    failure: () => {
      store.dispatch({
        type: types.RESET_SESSION,
      });
    }
  });
};
