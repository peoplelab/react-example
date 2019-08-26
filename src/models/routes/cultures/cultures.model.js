//-------------------------------------------------------------------
// Cultures model: Cultures api interface
//-------------------------------------------------------------------

import { base } from '../../common/model.base';


/**
 * Rest api cultrues path
 */
const url = '/api/v1/Cultures';

// get cultures list
export const apiCultureGet = async ({ headers }) => {
  const request = {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  };

  return base(url, request);
};

// add new culture to list
export const apiCulturePost = async ({ headers, request: data }) => {
  const request = {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: JSON.stringify(data),
  };

  return base(url, request);
};

// delete culture from list
export const apiCultureDelete = async ({ headers, params }) => {
  const request = {
    method: "delete",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  };

  return base(`${url}/${params.id}`, request);
};

// update specific list culture
export const apiCulturePut = async ({ headers, request: data }) => {
  const request = {
    method: "put",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: JSON.stringify(data),
  };

  return base(url, request);
};
