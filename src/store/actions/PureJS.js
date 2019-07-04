import Enum from '../../tools/Enum';


export const types = Enum.from(
  'JQUERY_API_PUREJS_REQUEST',
  'JQUERY_API_PUREJS_SUCCESS',
  'JQUERY_API_PUREJS_FAILURE',
);


export const jQueryApiPureJS = {
  request: request => ({ type: types.JQUERY_API_PUREJS_REQUEST, request }),
  success: response => ({ type: types.JQUERY_API_PUREJS_SUCCESS, response }),
  failure: (response, error) => ({ type: types.JQUERY_API_PUREJS_FAILURE, response, error }),
};
