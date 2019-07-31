//-------------------------------------------------------------------
// Base model: handler for api comunication
//
// export base function
//
// input object is a json of:
//    config: json with params to set the api call (url, method, ...)
//    callback: callback function
//
// output object is json of:
//    httpcode: api response code
//    rawdata: api response raw data (null if an error occurs)
//    rawerror: api error thrown (null if api success)
//-------------------------------------------------------------------

import $ from 'jquery';


const defaultConfig = {
  context: this,
};


export const base = (config, callback) => {
  console.log('> start api: ', config.url);
  $.ajax({
    ...defaultConfig,
    ...config
  }).done((data, textStatus, jqXHR) => {
    const { status } = jqXHR;

    console.log('> api done: ', status);

    const response = {
      httpcode: status,
      rawdata: data,
    };

    callback(response);
  }).fail((jqXHR, textStatus, errorThrown) => {
    const { status } = jqXHR;

    console.log('> api fail: ', status);
    console.log(errorThrown);

    const response = {
      httpcode: status,
      rawerror: errorThrown,
    };

    callback(response);
  }).always(() => {
    console.log('> end api: ', config.url);
  });
};
