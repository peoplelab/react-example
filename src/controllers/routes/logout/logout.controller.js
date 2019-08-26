//-------------------------------------------------------------------
// Logout controller: controller for logout
//-------------------------------------------------------------------
import { apiLogout } from '../../../models/routes/logout/logout.model';
import history from '../../../models/common/history';
import { types } from '../../../store/session.store';
import store from '../../../store/redux.store';


// call api to do logout and reset to initial state the session storage
export const callLogout = async ({ headers }) => {
  console.log('apiLogout', apiLogout);
  console.log('headers', headers);

  const response = apiLogout(headers);

  console.log('response', response);

  const { httpcode, dataraw, error } = await response;

  if (error) {
    // onFailure(error);

    console.log('> logout failure');
    console.log(error);
  } else if (httpcode === 200) {
    store.dispatch({ type: types.RESET_SESSION });

    console.log('> logout success');
    console.log(dataraw);
    history.push('/login');
  } else {
    // onError(dataraw);

    console.log('> logout error');
    console.log(dataraw);
  }
};
