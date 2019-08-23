//-------------------------------------------------------------------
// Session controller: controller for session
//-------------------------------------------------------------------
import moment from 'moment';
import { apiRefresh } from '../models/session.model';
import store from '../store/redux.store';
import { types } from '../store/session.store';
import history from '../models/common/history';


export const SessionValidity = () => {
  const { expiredAt, refreshExpiredAt, refreshToken } = store.getState();

  const token = moment(expiredAt);
  const refresh = moment(refreshExpiredAt);
  const login = moment();

  let timeout = token.diff(login).valueOf();
  timeout = timeout > 0 ? timeout : 0;

  console.log('session timer - ', timeout);

  const timer = setTimeout(() => {
    if (moment().isAfter(refresh)) {
      store.dispatch({ type: types.RESET_SESSION });
      history.replace('/login');
    } else if (moment().isAfter(token)) {
      const data = { refreshToken };
      callRefresh({ data });
    }
    console.log('session timer - ', 'done');
  }, timeout);

  return timer;
};


// call api to do login and set with valid credentials the session storage
export const callRefresh = async ({ data }) => {
  const { refreshToken } = store.getState();

  const request = {
    RefreshToken: refreshToken,
  };

  const response = apiRefresh(request);

  const { httpcode, dataraw, error } = await response;

  if (httpcode === 200) {
    store.dispatch({
      type: types.SET_SESSION,
      payload: dataraw,
    });

    console.log('> login success');
    console.log(dataraw);
  } else {
    store.dispatch({
      type: types.RESET_SESSION,
      payload: dataraw,
    });

    console.log('> login error');
    console.log(dataraw);
    console.log(error);
  }
};

// // call api to do a login refresh and set with valid credentials the session storage
// const callRefresh = async ({ data, context }) => {
//     const [, dispatch] = context;

//   const request = {
//     RefreshToken: data.refreshToken,
//   };

//   const response = apiRefresh(request);

//   const { httpcode, dataraw, error } = await response;

//   if (error) {
//     dispatch({
//       type: types.SESSION_FAILURE,
//       payload: error,
//     });

//     console.log('> session refresh failure');
//     console.log(error);
//   } else if (httpcode === 200) {
//     dispatch({
//       type: types.SESSION_SUCCESS,
//       payload: dataraw,
//     });

//     console.log('> session refresh success');
//     console.log(dataraw);
//   } else {
//     dispatch({
//       type: types.SESSION_ERROR,
//       payload: dataraw,
//     });

//     console.log('> session refresh error');
//     console.log(dataraw);
//   }
// };
