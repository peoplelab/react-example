//-------------------------------------------------------------------
// Login controller: controller for login
//-------------------------------------------------------------------

import { apiLogin } from '../../../models/routes/login/login.model';
import history from '../../../models/common/history';
import { setSession } from '../../common/session';
import { types } from '../../../store/session';


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
      setSession(types.SESSION_SUCCESS, rawdata);
      history.push('/');
      console.log('> login success');
    } else {
      failure(rawerror);
      setSession(types.SESSION_FAILURE, rawerror);
      console.log('> login failure');
    }
  });
};
