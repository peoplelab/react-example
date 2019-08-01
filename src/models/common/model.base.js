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
    var contentType = response.headers.get("content-type");

    let dataraw;
    if(contentType && contentType.includes("application/json")) {
      dataraw = await response.json();
    } else {
      dataraw = await response.text();
    }

    console.log('> REST API dataraw.');
    console.log(dataraw);

    return {
      httpcode,
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
