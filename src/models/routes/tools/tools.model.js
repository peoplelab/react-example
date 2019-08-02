//-------------------------------------------------------------------
// Login model: login api interface
//-------------------------------------------------------------------

import { base } from '../../common/model.base';


export const apiList = async (session) => {
  const request = {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      ...session,
    },
  };

  return base('/api/v1/odata/tools', request);
};

export const apiDetails = async (id, session) => {
  const request = {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      ...session,
    },
  };

  return base(`/api/v1/tools/${id}`, request);
};
