//-------------------------------------------------------------------
// Tools controller: controller for tools
//-------------------------------------------------------------------
import {
  apiCultureGet,
  apiCulturePost,
  apiCultureDelete,
  apiCulturePut
} from '../../../models/routes/cultures/cultures.model';


const dataPost = (state, payload) => {
  const { data } = state;

  const newData = [...data, {
    id: payload.id,
    code: payload.code,
    description: payload.description,
  }];

  console.log('POST -----------------------------------------');
  console.log(state);
  console.log(payload);
  console.log(newData);
  console.log('POST -----------------------------------------');

  return { ...state, data: newData };
};
const dataDelete = (state, payload) => {
  if (!payload) {
    return state;
  }

  const { data } = state;
  const newData = data.filter(({ id }) => id !== payload.id);

  console.log('DELETE -----------------------------------------');
  console.log(state);
  console.log(payload);
  console.log(newData);
  console.log('DELETE -----------------------------------------');

  return { ...state, data: newData };
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

  console.log('PUT -----------------------------------------');
  console.log(state);
  console.log(payload);
  console.log(newData);
  console.log('PUT -----------------------------------------');

  return { ...state, data: newData };
};


// call api to retrive culture list and add it to context storage
export const callCulturesGet = async ({ headers, dispatch }) => {
  const response = apiCultureGet(headers);

  const { httpcode, dataraw, error } = await response;

  if (error) {
    dispatch({ error, list: [] });

    console.log('> culture get list failure');
    console.log(error);
  } else if (httpcode === 200) {
    dispatch({ data: dataraw });

    console.log('> culture get list success');
    console.log(dataraw);
  } else {
    dispatch({ error: dataraw, data: [] });

    console.log('> culture get list error');
    console.log(dataraw);
  }
};

// call api to add culture to list and update context storage
export const callCulturesPost = async ({ data, headers, dispatch, state }) => {
  const request = {
    code: data.code,
    description: data.description,
  };

  const response = apiCulturePost(request, headers);

  const { httpcode, dataraw, error } = await response;

  if (error) {
    dispatch({ error });

    console.log('> culture post new item to list failure');
    console.log(error);
  } else if (httpcode === 200) {

    dispatch(dataPost(state, { ...request, id: dataraw }));

    console.log('> culture post new item to list success');
    console.log(dataraw);
  } else {
    dispatch({ error: dataraw });

    console.log('> culture post new item to list error');
    console.log(dataraw);
  }
};

// call api to delete culture from list and update context storage
export const callCulturesDelete = async ({ data, headers, dispatch, state }) => {
  const id = data;

  const response = apiCultureDelete(id, headers);

  const { httpcode, dataraw, error } = await response;

  if (error) {
    dispatch({ error });

    console.log('> culture delete item from list failure');
    console.log(error);
  } else if (httpcode === 200) {
    dispatch(dataDelete(state, { id }));

    console.log('> culture delete item from list success');
    console.log(dataraw);
  } else {
    dispatch({ error: dataraw, id: '' });

    console.log('> culture delete item from list error');
    console.log(dataraw);
  }
};

// call api to update list culture and relative item of context storage
export const callCulturesPut = async ({ data, headers, dispatch, state }) => {
  const request = {
    id: data.id,
    code: data.code,
    description: data.description,
  };

  const response = apiCulturePut(request, headers);

  const { httpcode, dataraw, error } = await response;

  if (error) {
    dispatch({ error });

    console.log('> culture update list item failure');
    console.log(error);
  } else if (httpcode === 200) {
    dispatch(dataPut(state, { ...request }));

    console.log('> culture update list item success');
    console.log(dataraw);
  } else {
    dispatch({
      error: dataraw,
      id: '',
      code: '',
      description: '',
    });

    console.log('> culture update list item error');
    console.log(dataraw);
  }
};
