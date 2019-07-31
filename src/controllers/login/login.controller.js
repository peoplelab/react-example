//-------------------------------------------------------------------
// Login controller: controller for login
//-------------------------------------------------------------------

import { apiLogin } from './login.model';


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
      console.log('success');
    } else {
      failure(rawerror);
      console.log('failure');
    }
  });
};


export const setSession = (data) => {
  const {
    accessToken,
    refreshToken,
    sessionId,
  } = data;

  sessionStorage.setItem('accessToken', accessToken);
  sessionStorage.setItem('refreshToken', refreshToken);
  sessionStorage.setItem('sessionId', sessionId);
};


export const resetSession = () => {
  sessionStorage.removeItem('accessToken');
  sessionStorage.removeItem('refreshToken');
  sessionStorage.removeItem('sessionId');
};
