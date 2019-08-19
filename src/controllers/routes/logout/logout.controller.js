//-------------------------------------------------------------------
// Logout controller: controller for logout
//-------------------------------------------------------------------
import { apiLogout } from '../../../models/routes/logout/logout.model';
import history from '../../../models/common/history';
import { types } from '../../../store/session.store';


export const callLogout = async ({ context }) => {
  const [state, dispatch] = context ;

  const headers = {
    Authorization: `Bearer ${state.session.accessToken}`,
    Session: state.session.sessionId,
  };

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
    dispatch({
      type: types.SESSION_RESET,
      payload: dataraw,
    });

    console.log('> logout success');
    console.log(dataraw);
    history.push('/login');
  } else {
    // onError(dataraw);

    console.log('> logout error');
    console.log(dataraw);
  }
};
