//-------------------------------------------------------------------
// Tools controller: controller for tools
//-------------------------------------------------------------------
import {
  apiCultureGet,
  apiCulturePost,
  apiCultureDelete,
  apiCulturePut
} from '../../../models/routes/cultures/cultures.model';
import { base } from '../../common/controller.base';


const dataPost = (state, payload) => {
  const { data } = state;

  const newData = [...data, {
    id: payload.id,
    code: payload.code,
    description: payload.description,
  }];

  return { ...state, data: newData };
};
const dataDelete = (state, payload) => {
  if (!payload) {
    return state;
  }

  const { data } = state;
  const newData = data.filter(({ id }) => id !== payload.id);

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

  return { ...state, data: newData };
};


// call api to retrive culture list and add it to context storage
export const callCulturesGet = async ({ dispatch }) => {
  base({
    api: apiCultureGet,
    success: ({ dataraw }) => {
      dispatch({ data: dataraw });
    },
    failure: () => {
      dispatch({ data: [] });
    }
  });
};

// call api to add culture to list and update context storage
export const callCulturesPost = async ({ data, dispatch, state }) => {
  const arg = {
    request: {
      code: data.code,
      description: data.description,
    },
    api: apiCulturePost,
    success: ({ dataraw }) => {
      dispatch(dataPost(state, { ...arg.request, id: dataraw }));
    },
    failure: ({ dataraw, error }) => {
      dispatch({ error: dataraw || error });
    }
  };

  base(arg);
};

// call api to delete culture from list and update context storage
export const callCulturesDelete = async ({ data, dispatch, state }) => {
  const arg = {
    params: {
      id: data,
    },
    api: apiCultureDelete,
    success: ({ dataraw }) => {
      dispatch(dataDelete(state, { id: arg.params.id }));
    },
    failure: ({ dataraw, error }) => {
      dispatch({ error: dataraw || error, id: '' });
    }
  };

  base(arg);
};

// call api to update list culture and relative item of context storage
export const callCulturesPut = async ({ data, dispatch, state }) => {
  const arg = {
    request: {
      id: data.id,
      code: data.code,
      description: data.description,
    },
    api: apiCulturePut,
    success: ({ dataraw }) => {
      dispatch(dataPut(state, { ...arg.request }));
    },
    failure: ({ dataraw, error }) => {
      dispatch({
        error: dataraw,
        id: '',
        code: '',
        description: '',
      });
    }
  };

  base(arg);
};
