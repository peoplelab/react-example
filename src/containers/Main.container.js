//----------------------------------------------------------------------------------------------------
// File: Main.container.js
//
// Desc: Gestore della comunicazione tra lo store globale e il componente per la gestione delle pagine
// Path: /src/container/Main.container
//----------------------------------------------------------------------------------------------------


import { connect } from 'react-redux';
import moment from 'moment';
import Main from './Main.view';


// Verifica che l'utente sia in possesso di credenziali valide
export const logged = (state) => {
  const { accessToken, sessionId, expiredAt } = state;

  const expired = moment(expiredAt, 'YYYY-MM-DDThh:mm:ss.SSSSSSS+z');
  const now = moment();

  return accessToken && sessionId && expired.isAfter(now);
};


// Traforma gli stati Redux in proprietà del componente React
const mapStateToProps = state => ({
  isUserLogged: logged(state) || false,
});


// connette la view del componente React con lo store di Redux
export default connect(mapStateToProps)(Main);
