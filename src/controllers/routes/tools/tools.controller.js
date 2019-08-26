//-------------------------------------------------------------------
// Tools controller: controller for tools
//-------------------------------------------------------------------
import { apiList, apiDetails } from '../../../models/routes/tools/tools.model';


// call api to retrive tools list and save it into context storage
export const callToolsList = async ({ headers, dispatch }) => {
  const response = apiList(headers);

  const { httpcode, dataraw, error } = await response;

  if (error) {
    dispatch({ error });

    console.log('> tools list failure');
    console.log(error);
  } else if (httpcode === 200) {
    dispatch({ list: dataraw });

    console.log('> tools list success');
    console.log(dataraw);
  } else {
    dispatch({ error: dataraw, list: [] });

    console.log('> tools list error');
    console.log(dataraw);
  }
};


// call api to retrive tool details and save it into context storage
export const callToolDetails = async ({ data, headers, dispatch }) => {
  const id = data;

  const response = apiDetails(id, headers);

  const { httpcode, dataraw, error } = await response;

  if (error) {
    dispatch({ error });

    console.log('> tools list failure');
    console.log(error);
  } else if (httpcode === 200) {
    dispatch({ details: dataraw });

    console.log('> tools list success');
    console.log(dataraw);
  } else {
    dispatch({ error: dataraw, details: {} });

    console.log('> tools list error');
    console.log(dataraw);
  }
};
