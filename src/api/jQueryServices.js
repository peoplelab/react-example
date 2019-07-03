import {
  jqueryApiPureJS,
} from '../generators/api';
import { jQueryApiPureJS } from '../store/actions/PureJS';

const ID = '50000157910000508014507496221648';
const BEARER = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvd3d3cy5kZXYteWVhcC5pdCIsImlhdCI6MTU2MTk4NDI3OSwibmJmIjoxNTYxOTg0Mjc5LCJleHAiOjE1NjI1ODkwNzksImRhdGEiOnsidXNlciI6eyJpZCI6IjQ1In19fQ.2BhSvlXpO0PNH1iL2xYOFXtuVtUD7S5dWy7fs8Z0Hio';

const jQueryCall = async () => jqueryApiPureJS({
  url: `/wp-json/wp/v2/business-plan/${ID}`,
  method: 'GET',
  contentType: 'application/json',
  processData: false,
  beforeSend: (xhr) => {
    xhr.setRequestHeader('Authorization', `Bearer ${BEARER}`);
  },
})(jQueryApiPureJS);


export {
  // eslint-disable-next-line import/prefer-default-export
  jQueryCall,
};
