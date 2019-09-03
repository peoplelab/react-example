import moment from 'moment';


// Verifica che l'utente sia in possesso di credenziali valide
export const logged = (state) => {
  const { accessToken, sessionId, expiredAt } = state;

  const expired = moment(expiredAt, 'YYYY-MM-DDThh:mm:ss.SSSSSSS+z');
  const now = moment();

  return accessToken && sessionId && expired.isAfter(now) || false;
};
