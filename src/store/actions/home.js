import Enum from '../../tools/Enum';


export const types = Enum.from(
  'OPEN_ALERT',
);


export const openAlert = () => ({ type: types.OPEN_ALERT });
