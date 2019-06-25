import Enum from '../../tools/Enum';


export const types = Enum.from(
  'CHANGE_COLOR',
  'UPDATE_VALUE',
  'SET_VISIBILITY',
);


export const changeColor = color => ({
  type: types.CHANGE_COLOR,
  payload: { color },
});

export const updateValue = value => ({
  type: types.UPDATE_VALUE,
  payload: { value },
});

export const setVisibility = visible => ({
  type: types.SET_VISIBILITY,
  payload: { visible },
});
