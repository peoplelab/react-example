import Enum from '../../tools/Enum';


export const types = Enum.from(
  'CALL_JQUERY_API',
  'DONE_JQUERY_API',
  'SAVE_API_RESPONSE',
);


export const calljQueryApi = () => ({ type: types.CALL_JQUERY_API });

export const doneJqueryApi = (response, payload) => ({
  type: types.DONE_JQUERY_API,
  response,
  ...payload,
});

export const saveApiResponse = response => ({
  type: types.SAVE_API_RESPONSE,
  payload: { response },
});
