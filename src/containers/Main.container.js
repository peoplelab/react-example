import { connect } from 'react-redux';
import Main from './Main.view';
import moment from 'moment';


// Verifica che l'utente sia in possesso di credenziali ancora valide
export const logged = (state) => {
  const { accessToken, sessionId, expiredAt } = state;

  const expired = moment(expiredAt, 'YYYY-MM-DDThh:mm:ss.SSSSSSS+z');
  const now = moment();

  return accessToken && sessionId && expired.isAfter(now);
};



const mapStateToProps = state => ({
  isUserLogged: logged(state) || false,
});


export default connect(mapStateToProps)(Main);
