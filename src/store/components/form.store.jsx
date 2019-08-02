import React from 'react';
import PropTypes from 'prop-types';
import { enumTypes, createStore } from '../common.store';


// -------------------
// Form Store types
// -------------------

export const types = enumTypes('ON_CHANGE');


//----------------------------------
// Form Store settings
//
// handler: store state hanlders
//----------------------------------

const handler = (state, payload) => ({
  [types.ON_CHANGE]: { ...state, [payload.name]: payload.value },
});


// ----------------------
// Form store handlers
//-----------------------

const { StoreContext, useStore, StoreProvider } = createStore();

export const FormContext = StoreContext;

export const useForm = useStore;

export const Provider = (props) => (
  <StoreProvider initial={props.initial} handler={handler}>
    {props.children}
  </StoreProvider>
);
Provider.propTypes = {
  children: PropTypes.node.isRequired,
  initial: PropTypes.object,
};
Provider.defaultProps = {
  initial: {}
};
