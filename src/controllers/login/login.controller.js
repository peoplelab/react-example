//-------------------------------------------------------------------
// Login controller: controller for login
//-------------------------------------------------------------------

import { apiLogin } from '../../models/login/login.model';
import { resetSession, setSession } from '../common/session';


export const callLogin = ({ sucess, failure }) => {
  apiLogin(function (response) {
    const { httpcode, rawdata, rawerror } = response;

    if (httpcode === 200) {
      sucess(rawdata);
      setSession(rawdata);
      console.log('> login success');
    } else {
      failure(rawerror);
      resetSession();
      console.log('> login failure');
    }
  });
};
