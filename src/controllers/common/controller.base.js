//----------------------------------------------------------------------------------------
// File: controller.base.js
//
// Desc: Funzione base del controller
//
// export funzione "base"
//
// input (singolo parametro JSON):
//    request: dati della request da passare all'api (opzionale)
//    api: metodo di chimata all'api
//    success: funzione di callback (opzionale)
//    failure: funzione di callback (opzionale)
//    params: parametri da passare all'url dell'api (opzionale)
//
// output (tramite callback):
//    on success:
//                dataraw: dati grezzi della response
//    on faliure:
//                httpcode: codice dello stato http della chimata
//                dataraw: dati grezzi della response di errore
//                error: oggetto Error tornato in caso sia stato impossibile eseguire la chimata
//
// Path: /src/controllers/common/controller.base
//----------------------------------------------------------------------------------------


import store from '../../store/redux.store';


// definizione degli header
const headersFn = state => ({
  Authorization: state.accessToken ? `Bearer ${state.accessToken}` : undefined,
  Session: state.sessionId,
});


export const base = async ({ request, api, success, failure, params }) => {
  // imposta gli header che verranno utilizzati per abilitare le chimate api
  const headers = headersFn(store.getState());

  console.log('----- Start api call');

  // esecuzione dell'api model e recupero della response
  const response = api({ request, headers, params });
  const { httpcode, dataraw, error } = await response;

  // success
  if (httpcode === 200) {
    if (typeof success === 'function') {
      success({ dataraw });
    }
    console.log('----- Success call');
  }
  // failure
  else {
    if (typeof failure === 'function') {
      failure({ httpcode, dataraw, error });
    }
    console.log('----- Failure call');
  }

  console.log('----- End api call');
};
