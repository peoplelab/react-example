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
  const { expiredAt, refreshExpiredAt } = store.getState();

  const token = moment(expiredAt);
  const refresh = moment(refreshExpiredAt);
  const login = moment();

  let timeout = token.diff(login).valueOf();
  timeout = timeout > 0 ? timeout : 0;

  console.log('session timer - ', timeout);

  const timer = setTimeout(() => {
    if (moment().isAfter(refresh)) {
      store.dispatch({ type: types.RESET_SESSION });
      history.replace('/login');
    } else if (moment().isAfter(token)) {
      callRefresh({});
    }
    console.log('session timer - ', 'done');
  }, timeout);

  return timer;
};

// chimata per il refresh automatico della sessione utentete
export const callRefresh = async ({ base, ...args }) => {
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

      base(...args);
    },
    failure: () => {
      store.dispatch({
        type: types.RESET_SESSION,
      });
    }
  });
};
