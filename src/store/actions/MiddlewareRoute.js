/* eslint-disable camelcase */
import Enum from '../../tools/Enum';


export const types = Enum.from(
  'CALL_JQUERY_API',
  'CALL_JQUERY_API_SAGA',
  'CALL_AXIOS_API_PROMISE',
  'CALL_AXIOS_API_ASYNC',
  'CALL_AXIOS_API_SAGA',
  'DONE_API',
  'SAVE_API_RESPONSE',
);


export const calljQueryApi = () => ({ type: types.CALL_JQUERY_API });
export const calljQueryApi_saga = () => ({ type: types.CALL_JQUERY_API_SAGA });
export const callAxiosApi_promise = () => ({ type: types.CALL_AXIOS_API_PROMISE });
export const callAxiosApi_async = () => ({ type: types.CALL_AXIOS_API_ASYNC });
export const callAxiosApi_saga = () => ({ type: types.CALL_AXIOS_API_SAGA });

export const doneApi = (response, request = {}) => ({
  type: types.DONE_API,
  request,
  ...response,
});

export const saveApiResponse = response => ({
  type: types.SAVE_API_RESPONSE,
  payload: { response },
});
