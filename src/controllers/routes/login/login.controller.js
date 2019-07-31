//-------------------------------------------------------------------
// Login controller: controller for login
//-------------------------------------------------------------------

import { apiLogin } from '../../../models/routes/login/login.model';
import history from '../../../models/common/history';
import { resetSession, setSession } from '../../common/session';


export const callLogin = ({ data, sucess, failure }) => {
  const request = {
    UserName: data.username,
    Password: data.password,
    Culture: data.culture,
  };

  apiLogin(request, function (response) {
    const { httpcode, rawdata, rawerror } = response;

    if (httpcode === 200) {
      sucess(rawdata);
      setSession(rawdata);
      history.push('/');
      console.log('> login success');
    } else {
      failure(rawerror);
      resetSession();
      console.log('> login failure');
    }
  });
};
