import React from 'react';
import PropTypes from 'prop-types';
import { enumTypes, createStore } from './common';


// -------------------
// Session Store types
// -------------------

export const types = enumTypes(
  'SESSION_FAILURE',
  'SESSION_SUCCESS',
  'SESSION_ERROR',
  'SESSION_RESET'
);


//----------------------------------
// Session Store settings
//
// initialState: store initial state
// handler: store state hanlders
//----------------------------------

const initial = {
  session: {
    username: "",
    accessToken: "",
    refreshToken: "",
    culture: "",
    groups: [],
    permissions: [],
    sessionId: "",
    expiredAt: "",
    sessionLogId: NaN,
    refreshExpiredAt: "",
    issuedAt: "",
    userId: NaN,
  },
  error: null,
  failure: null,
};

const handler = (state, payload) => ({
  [types.SESSION_FAILURE]: { ...initial, failure: payload },
  [types.SESSION_SUCCESS]: { session: payload, error: null, failure: null },
  [types.SESSION_ERROR]: { ...initial, error: payload },
  [types.SESSION_RESET]: { ...initial },
});


// ----------------------
// Session store handlers
//-----------------------

const { StoreContext, useStore, StoreProvider } = createStore();

export const SessionContext = StoreContext;

export const useSession = useStore;

export const SessionProvider = (props) => (
  <StoreProvider initial={initial} handler={handler}>
    {props.children}
  </StoreProvider>
);
SessionProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
SessionProvider.defaultProps = {
};
