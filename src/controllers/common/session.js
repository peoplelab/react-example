import { useSession, types } from '../../store/session';


export const logged = (state) => {
  const { accessToken, sessionId, expiredAt } = state;

  const expired = new Date(expiredAt);
  const now = new Date();

  return accessToken && sessionId & expired > now;
};


//---------------------
//  type === types.SESSION_SUCCESS || type === types.SESSION_FAILURE
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
//---------------------
export const setSession = (type, data) => {
  const [, dispatch] = useSession;
  dispatch({
    type,
    payload: data,
  });
};

export const resetSession = () => {
  const [, dispatch] = useSession;
  dispatch({
    type: types.SESSION_RESET
  });
};
