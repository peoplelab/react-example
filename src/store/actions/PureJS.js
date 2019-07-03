import Enum from '../../tools/Enum';


export const types = Enum.from(
  'CALL_JQUERY_API_PUREJS',
  'JQUERY_API_PUREJS_REQUEST',
  'JQUERY_API_PUREJS_SUCCESS',
  'JQUERY_API_PUREJS_FAILURE',
);


export const calljQueryApiPureJS = () => ({ type: types.CALL_JQUERY_API_PUREJS });

export const jQueryApiPureJS = {
  request: request => ({ type: types.JQUERY_API_PUREJS_REQUEST, request }),
  success: response => ({ type: types.JQUERY_API_PUREJS_SUCCESS, response }),
  failure: (response, error) => ({ type: types.JQUERY_API_PUREJS_FAILURE, response, error }),
};
