import jQuery from 'jquery';
import axios from 'axios';


export const jQueryCreateApi = config => (store, type, request = {}) => {
  jQuery
    .ajax(config)
    .done((data, textStatus, response) => {
      const apiAction = {
        type,
        request,
        success: { data, textStatus, response }
      };

      store.dispatch(apiAction);
    })
    .fail((response, textStatus, err) => {
      const apiAction = {
        type,
        request,
        failure: { response, textStatus, error: err }
      };

      store.dispatch(apiAction);
    });
};

export const jQueryCreateApi_saga = config => (store, type, request = {}) => new Promise((receive, reiject) => {
  jQuery
    .ajax(config)
    .done((data, textStatus, response) => {
      const result = { success: { data, textStatus, response } };

      receive(result);
    })
    .fail((response, textStatus, err) => {
      const result = { failure: { response, textStatus, error: err } };

      reiject(result);
    });
});


export const axiosCreateApi_promise = (config) => (store, type, request = {}) => {
  axios(config)
    .then((result) => {
      const { data, status } = result;

      const apiAction = {
        type,
        request,
        success: { data, status, response: result }
      };

      store.dispatch(apiAction);
    })
    .catch((err) => {
      const error = err.response.data;

      const apiAction = {
        type,
        request,
        failure: { response: err, status, error }
      };

      store.dispatch(apiAction);
    });
};

export const axiosCreateApi_async = (config) => async (store, type, request = {}) => {
  try {
    const result = await axios(config);
    const { data, status } = result;

    const apiAction = {
      type,
      request,
      success: { data, status, response: result }
    };

    store.dispatch(apiAction);
  } catch (err) {
    const error = err.response.data;

    const apiAction = {
      type,
      request,
      failure: { response: err, status, error }
    };

    store.dispatch(apiAction);
  }
};

export const axiosCreateApi_saga = (config) => async () => {
  try {
    const result = await axios(config);
    const { data, status } = result;

    return { data, status, response: result };
  } catch (err) {
    const error = err.response.data;

    return { response: err, status, error };

  }
};