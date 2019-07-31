//-------------------------------------------------------------------
// Logout controller: controller for logout
//-------------------------------------------------------------------

import { apiLogout } from '../../../models/routes/logout/logout.model';
import history from '../../../models/common/history';
import { resetSession } from '../../common/session';


export const callLogout = ({ sucess, failure }) => {

  apiLogout(function (response) {
    const { httpcode, rawdata, rawerror } = response;

    if (httpcode === 200) {
      sucess(rawdata);
      resetSession();
      history.push('/login');
      console.log('> logout success');
    } else {
      failure(rawerror);
      console.log('> logout failure');
    }
  });
};
