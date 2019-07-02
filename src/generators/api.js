import jQuery from 'jquery';


export const createApi = config => (store, type, payload = {}) => {
  jQuery
    .ajax(config)
    .done((data, textStatus, response) => {
      const apiAction = {
        type,
        ...payload,
        success: { data, textStatus, response }
      };

      store.dispatch(apiAction);
    }).fail((response, textStatus, err) => {
      const apiAction = {
        type,
        ...payload,
        failure: { response, textStatus, err }
      };

      store.dispatch(apiAction);
    });
};