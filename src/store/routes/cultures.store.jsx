import React from 'react';
import PropTypes from 'prop-types';
import { enumTypes, createStore } from '../common.store';


// -------------------
// Culture Store types
// -------------------

export const types = enumTypes(
  'RESTAPI_CULTURES_GET_FAILURE',
  'RESTAPI_CULTURES_GET_SUCCESS',
  'RESTAPI_CULTURES_GET_ERROR',

  'RESTAPI_CULTURES_POST_FAILURE',
  'RESTAPI_CULTURES_POST_SUCCESS',
  'RESTAPI_CULTURES_POST_ERROR',

  'RESTAPI_CULTURES_DELETE_FAILURE',
  'RESTAPI_CULTURES_DELETE_SUCCESS',
  'RESTAPI_CULTURES_DELETE_ERROR',

  'RESTAPI_CULTURES_PUT_FAILURE',
  'RESTAPI_CULTURES_PUT_SUCCESS',
  'RESTAPI_CULTURES_PUT_ERROR',
);


//----------------------------------
// Culture Store settings
//
// handler: store state hanlders
//----------------------------------

const initial = {
  data: [],
  error: null,
  failure: null,
};


const dataPost = (state, payload) => {
  const { data } = state;

  const newData = [...data, {
    id: payload.id,
    code: payload.code,
    description: payload.description,
  }];

  return newData;
};
const dataDelete = (state, payload) => {
  if (!payload) {
    return state;
  }

  const { data } = state;
  const newData = data.filter(({ id }) => id !== payload);

  return newData;
};
const dataPut = (state, payload) => {
  if (!payload) {
    return state;
  }

  let { data } = state;

  const index = data.findIndex(item => item.id === payload.id);
  const before = data.slice(0, index);
  const after = data.slice(index + 1, data.length);

  const newData = [...before, {
    id: payload.id,
    code: payload.code,
    description: payload.description,
  }, ...after];

  return newData;
};


const handler = (state, payload) => ({
  [types.RESTAPI_CULTURES_GET_FAILURE]: { ...initial, failure: payload },
  [types.RESTAPI_CULTURES_POST_FAILURE]: { ...state, failure: payload },
  [types.RESTAPI_CULTURES_DELETE_FAILURE]: { ...state, failure: payload },
  [types.RESTAPI_CULTURES_PUT_FAILURE]: { ...state, failure: payload },

  [types.RESTAPI_CULTURES_GET_SUCCESS]: { ...state, data: payload, error: null, failure: null  },
  [types.RESTAPI_CULTURES_POST_SUCCESS]: { ...state, data: dataPost(state, payload), error: null, failure: null },
  [types.RESTAPI_CULTURES_DELETE_SUCCESS]: { ...state, data: dataDelete(state, payload), error: null, failure: null },
  [types.RESTAPI_CULTURES_PUT_SUCCESS]: { ...state, data: dataPut(state, payload), error: null, failure: null },

  [types.RESTAPI_CULTURES_GET_ERROR]: { ...initial, error: payload },
  [types.RESTAPI_CULTURES_POST_ERROR]: { ...state, error: payload },
  [types.RESTAPI_CULTURES_DELETE_ERROR]: { ...state, error: payload },
  [types.RESTAPI_CULTURES_PUT_ERROR]: { ...state, error: payload },
});


// ----------------------
// Culture store handlers
//-----------------------

const { StoreContext, useStore, StoreProvider } = createStore();

export const CultureContext = StoreContext;

export const useCulture = useStore;

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
