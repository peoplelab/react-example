import React from 'react';
import PropTypes from 'prop-types';
import { enumTypes, createStore } from './common';


// -------------------
// Session Store types
// -------------------

export const types = enumTypes('SET_SESSION', 'SESSION_RESET');


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
};

const handler = (state, payload) => ({
  [types.SET_SESSION]: { ...payload },
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
