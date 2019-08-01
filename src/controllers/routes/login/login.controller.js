//-------------------------------------------------------------------
// Login controller: controller for login
//-------------------------------------------------------------------
import { apiLogin } from '../../../models/routes/login/login.model';
import history from '../../../models/common/history';


export const callLogin = async ({ data, onSuccess, onFailure, onError }) => {
  const request = {
    UserName: data.username,
    Password: data.password,
    Culture: data.culture,
  };

  const response = apiLogin(request);

  const { httpcode, dataraw, error } = await response;

  if (error) {
    onFailure(error);
    console.log('> login failure');
    console.log(error);
  } else if (httpcode === 200) {
    onSuccess(dataraw);
    console.log('> login success');
    console.log(dataraw);
    history.push('/');
  } else {
    onError(dataraw);
    console.log('> login error');
    console.log(dataraw);
  }
};
