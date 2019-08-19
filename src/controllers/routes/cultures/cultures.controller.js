//-------------------------------------------------------------------
// Tools controller: controller for tools
//-------------------------------------------------------------------
import {
  apiCultureGet,
  apiCulturePost,
  apiCultureDelete,
  apiCulturePut
} from '../../../models/routes/cultures/cultures.model';
import { types } from '../../../store/routes/cultures.store';


// call api to retrive culture list and add it to context storage
export const callCulturesGet = async ({ context }) => {
  const [, dispatch] = context.cultureContext;
  const [state] = context.sessionContext;

  const headers = {
    Authorization: `Bearer ${state.session.accessToken}`,
    Session: state.session.sessionId,
  };

  const response = apiCultureGet(headers);

  const { httpcode, dataraw, error } = await response;

  if (error) {
    dispatch({ type: types.RESTAPI_CULTURES_GET_FAILURE, payload: error });

    console.log('> culture get list failure');
    console.log(error);
  } else if (httpcode === 200) {
    dispatch({ type: types.RESTAPI_CULTURES_GET_SUCCESS, payload: dataraw });

    console.log('> culture get list success');
    console.log(dataraw);
  } else {
    dispatch({ type: types.RESTAPI_CULTURES_GET_ERROR, payload: dataraw });

    console.log('> culture get list error');
    console.log(dataraw);
  }
};

// call api to add culture to list and update context storage
export const callCulturesPost = async ({ data, context }) => {
  const [, dispatch] = context.cultureContext;
  const [state] = context.sessionContext;

  const request = {
    code: data.code,
    description: data.description,
  };

  const headers = {
    Authorization: `Bearer ${state.session.accessToken}`,
    Session: state.session.sessionId,
  };

  const response = apiCulturePost(request, headers);

  const { httpcode, dataraw, error } = await response;

  if (error) {
    dispatch({ type: types.RESTAPI_CULTURES_POST_FAILURE, payload: error });

    console.log('> culture post new item to list failure');
    console.log(error);
  } else if (httpcode === 200) {
    const payload = { ...request, id: dataraw };

    dispatch({ type: types.RESTAPI_CULTURES_POST_SUCCESS, payload });

    console.log('> culture post new item to list success');
    console.log(dataraw);
  } else {
    dispatch({ type: types.RESTAPI_CULTURES_POST_ERROR, payload: dataraw });

    console.log('> culture post new item to list error');
    console.log(dataraw);
  }
};

// call api to delete culture from list and update context storage
export const callCulturesDelete = async ({ data, context }) => {
  const [, dispatch] = context.cultureContext;
  const [state] = context.sessionContext;

  const id = data;

  const headers = {
    Authorization: `Bearer ${state.session.accessToken}`,
    Session: state.session.sessionId,
  };

  const response = apiCultureDelete(id, headers);

  const { httpcode, dataraw, error } = await response;

  if (error) {
    dispatch({ type: types.RESTAPI_CULTURES_DELETE_FAILURE, payload: error });

    console.log('> culture delete item from list failure');
    console.log(error);
  } else if (httpcode === 200) {
    dispatch({ type: types.RESTAPI_CULTURES_DELETE_SUCCESS, payload: id });

    console.log('> culture delete item from list success');
    console.log(dataraw);
  } else {
    dispatch({ type: types.RESTAPI_CULTURES_DELETE_ERROR, payload: dataraw });

    console.log('> culture delete item from list error');
    console.log(dataraw);
  }
};

// call api to update list culture and relative item of context storage
export const callCulturesPut = async ({ data, context }) => {
  const [, dispatch] = context.cultureContext;
  const [state] = context.sessionContext;

  const request = {
    id: data.id,
    code: data.code,
    description: data.description,
  };

  const headers = {
    Authorization: `Bearer ${state.session.accessToken}`,
    Session: state.session.sessionId,
  };

  const response = apiCulturePut(request, headers);

  const { httpcode, dataraw, error } = await response;

  if (error) {
    dispatch({ type: types.RESTAPI_CULTURES_PUT_FAILURE, payload: error });

    console.log('> culture update list item failure');
    console.log(error);
  } else if (httpcode === 200) {
    dispatch({ type: types.RESTAPI_CULTURES_PUT_SUCCESS, payload: request });

    console.log('> culture update list item success');
    console.log(dataraw);
  } else {
    dispatch({ type: types.RESTAPI_CULTURES_PUT_ERROR, payload: dataraw });

    console.log('> culture update list item error');
    console.log(dataraw);
  }
};
