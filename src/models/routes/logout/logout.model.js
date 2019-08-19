//-------------------------------------------------------------------
// Logout model: Logout api interface
//-------------------------------------------------------------------

import { base } from '../../common/model.base';


// do logout
export const apiLogout = async (headers) => {
  const request = {
    method: "put",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  };

  return base('/api/v1/Users/Logout', request);
};
