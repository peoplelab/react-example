//--------------------------------------------------------------------------
// File: session.store.js
//
// Desc: Definizione del gestore dello stato di sessione dello store globale
// Path: /src/store/session.store
//--------------------------------------------------------------------------


import Enum from '../models/common/Enum';


// Lista delle tipologie di azioni applicabili allo store
export const types = Enum.from('SET_USER_IP', 'SET_SESSION', 'RESET_SESSION');


// Stato iniziale dello store, basato sulla response di login
const initialState = {
  ip: '',
  username: '',
  accessToken: '',
  refreshToken: '',
  culture: '',
  groups: [],
  permissions: [],
  sessionId: '',
  expiredAt: '',
  sessionLogId: '',
  refreshExpiredAt: '',
  issuedAt: '',
};


// Gestore delle azioni passate in store.dispatch per poter modificare lo stato corrente dello store
const actionHandlers = {
  [types.SET_USER_IP]:  (state, { payload }) => ({
    ...state,
    ip: payload.ip,
  }),
	[types.SET_SESSION]: (state, { payload }) => ({
    ...state,
    ...payload,
  }),
  [types.RESET_SESSION]: (state, { payload }) => ({
      ...initialState,
      ip: state.ip,
  }),
};


// Inizializzazione del reducer della sessione per poter filtrare le azioni applicate allo store
export const reducer = (state = initialState, action) => {
  const handler = actionHandlers[action.type];

  return typeof handler === 'function' ? handler(state, action) : state;
};
