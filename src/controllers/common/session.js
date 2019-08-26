import moment from 'moment';


// check if the user has valid credentials
export const logged = (state) => {
  const { accessToken, sessionId, expiredAt } = state;

  const expired = moment(expiredAt, 'YYYY-MM-DDThh:mm:ss.SSSSSSS+z');
  const now = moment();

  return accessToken && sessionId && expired.isAfter(now);
};
