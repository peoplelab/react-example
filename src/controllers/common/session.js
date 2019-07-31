export const logged = () => true;

export const setSession = (data) => {
  const {
    accessToken,
    refreshToken,
    sessionId,
  } = data;

  sessionStorage.setItem('accessToken', accessToken);
  sessionStorage.setItem('refreshToken', refreshToken);
  sessionStorage.setItem('sessionId', sessionId);
};

export const resetSession = () => {
  sessionStorage.removeItem('accessToken');
  sessionStorage.removeItem('refreshToken');
  sessionStorage.removeItem('sessionId');
};
