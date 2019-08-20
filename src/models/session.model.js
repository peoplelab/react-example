//-------------------------------------------------------------------
// Login model: Login api interface
//-------------------------------------------------------------------

import { base } from './common/model.base';


const defaultData = {
  GrantType: 'RefreshToken',
};


// do login
export const apiRefresh = async (data) => {
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
