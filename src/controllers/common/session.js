import { types } from '../../store/session.store';


// check if the user has valid credentials
export const logged = (state) => {
  const { accessToken, sessionId, expiredAt } = state;

  const expired = new Date(expiredAt);
  const now = new Date();

  return accessToken && sessionId && expired > now;
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
