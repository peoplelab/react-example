import Enum from '../../tools/Enum';


export const types = Enum.from(
  'CALL_JQUERY_API',
  'SAVE_API_RESPONSE',
);


export const calljQueryApi = () => ({ type: types.JQUERY_API });

export const saveApiResponse = response => ({
  type: types.SAVE_API_RESPONSE,
  payload: { response },
});
