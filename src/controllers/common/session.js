export const logged = () => {
  const accessToken = sessionStorage.getItem('accessToken');
  const sessionId = sessionStorage.getItem('sessionId');
  const expiredAt = sessionStorage.getItem('expiredAt');

  const expired = new Date(expiredAt);
  const now = new Date();

  return expired > now && accessToken && sessionId;
};


//---------------------
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
export const setSession = (data) => {
  Object.keys(data).forEach(key => {
    const value = data[key];
    sessionStorage.setItem(key, value);
  });
};

export const resetSession = () => {
  sessionStorage.clear();
};
