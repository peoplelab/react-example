//-------------------------------------------------------------------
// Tools model: Tools api interface
//-------------------------------------------------------------------

import { base } from '../../common/model.base';


// get tools list
export const apiList = async ({ headers }) => {
  const request = {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  };

  return base('/api/v1/odata/tools', request);
};


// get tool details
export const apiDetails = async ({ headers, params }) => {
  const request = {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  };

  return base(`/api/v1/tools/${params.id}`, request);
};
