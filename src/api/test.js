import {
  jQueryCreateApi,
  jQueryCreateApi_saga,
  axiosCreateApi_promise,
  axiosCreateApi_async,
  axiosCreateApi_saga,
} from '../generators/api';


const ID = '50000157910000508014507496221648';
const BEARER= 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvd3d3cy5kZXYteWVhcC5pdCIsImlhdCI6MTU2MTk4NDI3OSwibmJmIjoxNTYxOTg0Mjc5LCJleHAiOjE1NjI1ODkwNzksImRhdGEiOnsidXNlciI6eyJpZCI6IjQ1In19fQ.2BhSvlXpO0PNH1iL2xYOFXtuVtUD7S5dWy7fs8Z0Hio';


const jQueryApi = jQueryCreateApi({
  url: `https://wwws.dev-yeap.it/wp-json/wp/v2/business-plan/${ID}`,
  method: 'GET',
  contentType: 'application/json',
  processData: false,
  beforeSend: function (xhr) {
    xhr.setRequestHeader('Authorization', `Bearer ${BEARER}`);
  }
});

const jQueryApi_saga = jQueryCreateApi_saga({
  url: `https://wwws.dev-yeap.it/wp-json/wp/v2/business-plan/${ID}`,
  method: 'GET',
  contentType: 'application/json',
  processData: false,
  beforeSend: function (xhr) {
    xhr.setRequestHeader('Authorization', `Bearer ${BEARER}`);
  }
});

const axiosApi_promise = axiosCreateApi_promise({
  url: `https://wwws.dev-yeap.it/wp-json/wp/v2/business-plan/${ID}`,
  method: 'get',
  headers: {
    'content-type': 'application/json',
    'Authorization': `Bearer ${BEARER}`,
  },
  data: {},
});

const axiosApi_async = axiosCreateApi_async({
  url: `https://wwws.dev-yeap.it/wp-json/wp/v2/business-plan/${ID}`,
  method: 'get',
  headers: {
    'content-type': 'application/json',
    'Authorization': `Bearer ${BEARER}`,
  },
  data: {},
});

const axiosApi_saga = axiosCreateApi_saga({
  url: `https://wwws.dev-yeap.it/wp-json/wp/v2/business-plan/${ID}`,
  method: 'get',
  headers: {
    'content-type': 'application/json',
    'Authorization': `Bearer ${BEARER}`,
  },
  data: {},
});


export {
  jQueryApi,
  jQueryApi_saga,
  axiosApi_promise,
  axiosApi_async,
  axiosApi_saga,
};