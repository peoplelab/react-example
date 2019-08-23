import { types } from '../../store/session.store.jsx';
import moment from 'moment';


// check if the user has valid credentials
export const logged = (state) => {
  const { accessToken, sessionId, expiredAt } = state;

  const expired = moment(expiredAt, 'YYYY-MM-DDThh:mm:ss.SSSSSSS+z');
  const now = moment();

  return accessToken && sessionId && expired.isAfter(now);
};


//---------------------------------------------------------------------
// store the session data response
//
//
//  type === types[SESSION_FAILURE || SESSION_SUCCESS || SESSION_ERROR]
//
//  data = {
//    username,
//    accessToken,
//    refreshToken,
//    culture,
//    groups,
//    permissions,
//    sessionId,
//    expiredAt,
//    sessionLogId,
//    refreshExpiredAt,
//    issuedAt,
//    userId,
//  }
//---------------------------------------------------------------------
export const sessionFailure = (constext, payload) => {
  const [, dispatch] = constext;

  dispatch({
    type: types.SESSION_FAILURE,
    payload,
  });
};
export const sessionSuccess = (constext, payload) => {
  const [, dispatch] = constext;

  dispatch({
    type: types.SESSION_SUCCESS,
    payload,
  });
};
export const sessionError = (constext, payload) => {
  const [, dispatch] = constext;

  dispatch({
    type: types.SESSION_ERROR,
    payload,
  });
};
