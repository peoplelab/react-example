//-------------------------------------------------------------------
// Cultures model: Cultures api interface
//-------------------------------------------------------------------

import { base } from '../../common/model.base';


/**
 * Rest api cultrues path
 */
const url = '/api/v1/Cultures';

// get cultures list
export const apiCultureGet = async (session) => {
  const request = {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      ...session,
    },
  };

  return base(url, request);
};

// add new culture to list
export const apiCulturePost = async (data, session) => {
  const request = {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      ...session,
    },
    body: JSON.stringify(data),
  };

  return base(url, request);
};

// delete culture from list
export const apiCultureDelete = async (id, session) => {
  const request = {
    method: "delete",
    headers: {
      "Content-Type": "application/json",
      ...session,
    },
  };

  return base(`${url}/${id}`, request);
};

// update specific list culture
export const apiCulturePut = async (data, session) => {
  const request = {
    method: "put",
    headers: {
      "Content-Type": "application/json",
      ...session,
    },
    body: JSON.stringify(data),
  };

  return base(url, request);
};
