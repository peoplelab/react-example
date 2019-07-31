//-------------------------------------------------------------------
// Logout controller: controller for logout
//-------------------------------------------------------------------

import { apiLogout } from '../../models/logout/logout.model';
import { resetSession } from '../common/session';


export const callLogout = ({ data, sucess, failure }) => {
  const request = {
    UserName: data.username,
    Password: data.password,
    Culture: data.culture,
  };

  apiLogout(request, function (response) {
    const { httpcode, rawdata, rawerror } = response;

    if (httpcode === 200) {
      sucess(rawdata);
      resetSession();
      console.log('> logout success');
    } else {
      failure(rawerror);
      console.log('> logout failure');
    }
  });
};
