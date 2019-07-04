import Enum from '../../../tools/Enum';


export const types = Enum.from(
  'GET_GEOLOCATION',
  'SET_GEOLOCATION',
);


export const getGeolocation = () => ({ type: types.GET_GEOLOCATION });

export const setGeolocation = (latitude, longitude) => ({
  type: types.SET_GEOLOCATION,
  payload: {
    latitude,
    longitude,
  },
});
