//----------------------------------------------------------------------------------------
// File: failure.handler.js
//
// Path: /src/controllers/common/failure.handler
//----------------------------------------------------------------------------------------


import { callRefresh } from '../session.controller';
import { base } from './controller.base';


// Funzione di gestione globale dei casi di errore delle chiamate API
export const failureHandler = ({ input, output }) => {

  // Se richiesto esegue in refresh della sessione
  // Vengono passati i dati necessari per eseguire nuovamente la chiamata che ha tornato errore
  if (output.dataraw === 'sessionExpired' && (input.refresh === undefined || input.refresh)) {
    callRefresh({ base, ...input });
  }
};
