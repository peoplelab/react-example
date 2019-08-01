//-------------------------------------------------------------------
// Logout controller: controller for logout
//-------------------------------------------------------------------
import { apiLogout } from '../../../models/routes/logout/logout.model';
import history from '../../../models/common/history';


export const callLogout = async ({ data, onFailure, onSuccess, onError }) => {

  const headers = {
    Authorization: `Bearer ${data.accessToken}`,
    Session: data.sessionId,
  };

  console.log('apiLogout', apiLogout);
  console.log('headers', headers);

  const response = apiLogout(headers);

  console.log('response', response);

  const { httpcode, dataraw, error } = await response;

  if (error) {
    onFailure(error);
    console.log('> logout failure');
    console.log(error);
  } else if (httpcode === 200) {
    onSuccess(dataraw);
    console.log('> logout success');
    console.log(dataraw);
    history.push('/login');
  } else {
    onError(dataraw);
    console.log('> logout error');
    console.log(dataraw);
  }
};
