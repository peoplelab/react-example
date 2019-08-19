//-------------------------------------------------------------------
// Tools model: Tools api interface
//-------------------------------------------------------------------

import { base } from '../../common/model.base';


// get tools list
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


// get tool details
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
