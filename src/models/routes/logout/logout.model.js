//-------------------------------------------------------------------
// Login model: login api interface
//-------------------------------------------------------------------

import { base } from '../../common/model.base';


const config = () => ({
  url: '/api/v1/Users/Logout',
  type: 'PUT',
  dataType: 'json',
  contentType: 'application/json',
  beforeSend: (request) => {
    const accessToken = sessionStorage.getItem('accessToken');
    const sessionId = sessionStorage.getItem('sessionId');

    request.setRequestHeader("Authorization", `Bearer ${accessToken}`);
    request.setRequestHeader("Session", sessionId);
  },
});


export const apiLogout = (callback) => {
  base(config(), callback);
};
