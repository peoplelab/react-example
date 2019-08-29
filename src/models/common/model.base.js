//-------------------------------------------------------------------
// File: model.base.js
//
// Desc: Funzione base del model per gestione della comunicazione con le api
//
// input:
//    url: stringa di percorso all'api
//    request: oggetto request da passare all'api (opzionale)
//
// output (tramite Promise):
//    httpcode: codice dello stato http della chimata
//    dataraw: dati grezzi della response
//    error: oggetto Error tornato in caso sia stato impossibile eseguire la chimata
//
// Path: /src/model/common/model.base
//-------------------------------------------------------------------

export const base = async (url, request) => {
  try {
    //eslint-disable-next-line
    console.log('> Calling REST API:' + url);
    console.log(request);

    const response = await fetch(url, request);

    //eslint-disable-next-line
    console.log('> REST API executed.');
    console.log(response);

    const httpcode = response.status;
    const contentType = response.headers.get("content-type");
    const dataraw = await response.text();

    console.log('> REST API dataraw.');
    console.log(contentType);
    console.log(dataraw);

    return {
      httpcode,
      contentType,
      dataraw,
    };
  } catch (error) {
    //eslint-disable-next-line
    console.log('> REST API failed.');
    console.log(error);

    return {
      error,
    };
  }
};
