import Enum from '../../tools/Enum';


export const types = Enum.from(
  'CALL_AXIOS_API_SAGAS',
  'AXIOS_API_SAGAS_REQUEST',
  'AXIOS_API_SAGAS_SUCESS',
  'AXIOS_API_SAGAS_FAILURE',
);


export const callAxiosApiSagas = () => ({ type: types.CALL_AXIOS_API_SAGAS });

export const AxiosApiSagas = {
  request: request => ({ type: types.AXIOS_API_SAGAS_REQUEST, request }),
  success: response => ({ type: types.AXIOS_API_SAGAS_SUCESS, response }),
  failure: (response, error) => ({ type: types.AXIOS_API_SAGAS_FAILURE, response, error }),
};
