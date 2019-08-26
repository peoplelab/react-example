//-------------------------------------------------------------------
// Login model: Login api interface
//-------------------------------------------------------------------

import { base } from '../../common/model.base';


const IP = '1';

const defaultData = {
  GrantType: 'Password',
  IP,
};


// do login
export const apiLogin = async ({ request: data }) => {
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



// get cultures list
export const apiCultureGet = async () => {
  const request = {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  };

  return base('/api/v1/Cultures', request);
};


// get last users logged list
export const apiLastLogin = async () => {
  const request = {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  };

  return base(`api/v1/Token/latest/${IP}/9`, request);
};
