//-------------------------------------------------------------------
// Login model: login api interface
//-------------------------------------------------------------------

import { base } from '../../common/model.base';


const defaultData = {
  GrantType: 'Password',
  IP: '1',
};


export const apiLogin = async (data) => {
  const body = {
    ...defaultData,
    ...data,
  };

  const request = {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body),
  };

  return base('/api/v1/Token', request);
};
