import React from 'react';
import PropTypes from 'prop-types';
import { enumTypes, createStore } from '../common.store';


// -------------------
// Tools Store types
// -------------------

export const types = enumTypes(
  'TOOLS_FAILURE',
  'TOOLS_SUCCESS',
  'TOOLS_ERROR',
  'ID_TOOL_FAILURE',
  'ID_TOOL_SUCCESS',
  'ID_TOOL_ERROR',
);


//----------------------------------
// Tools Store settings
//
// handler: store state hanlders
//----------------------------------

const initial = {
  list: [],
  details  : {},
  error: null,
  failure: null,
};

const handler = (state, payload) => ({
  [types.TOOLS_FAILURE]: { ...initial, failure: payload },
  [types.TOOLS_SUCCESS]: { ...state, list: payload, error: null, failure: null },
  [types.TOOLS_ERROR]: { ...initial, error: payload },
  [types.ID_TOOL_FAILURE]: { ...state, failure: payload, current: NaN, details: {} },
  [types.ID_TOOL_SUCCESS]: { ...state, details: payload, error: null, failure: null },
  [types.ID_TOOL_ERROR]: { ...state, error: payload, current: NaN, details: {} },
});


// ----------------------
// Tools store handlers
//-----------------------

const { StoreContext, useStore, StoreProvider } = createStore();

export const ToolsContext = StoreContext;

export const useTools = useStore;

export const Provider = (props) => (
  <StoreProvider initial={initial} handler={handler}>
    {props.children}
  </StoreProvider>
);
Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
Provider.defaultProps = {
};
