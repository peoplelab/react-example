//-------------------------------------------------------------------
// Tools controller: controller for tools
//-------------------------------------------------------------------
import { apiList, apiDetails } from '../../../models/routes/tools/tools.model';


export const callToolsList = async ({ session, onSuccess, onFailure, onError }) => {
  const headers = {
    Authorization: `Bearer ${session.accessToken}`,
    Session: session.sessionId,
  };

  const response = apiList(headers);

  const { httpcode, dataraw, error } = await response;

  if (error) {
    onFailure(error);
    console.log('> tools list failure');
    console.log(error);
  } else if (httpcode === 200) {
    onSuccess(dataraw);
    console.log('> tools list success');
    console.log(dataraw);
  } else {
    onError(dataraw);
    console.log('> tools list error');
    console.log(dataraw);
  }
};


export const callToolDetails = async ({ data, session, onSuccess, onFailure, onError }) => {
  const id = data;
  const headers = {
    Authorization: `Bearer ${session.accessToken}`,
    Session: session.sessionId,
  };

  const response = apiDetails(id, headers);

  const { httpcode, dataraw, error } = await response;

  if (error) {
    onFailure(error);
    console.log('> tools list failure');
    console.log(error);
  } else if (httpcode === 200) {
    onSuccess(dataraw);
    console.log('> tools list success');
    console.log(dataraw);
  } else {
    onError(dataraw);
    console.log('> tools list error');
    console.log(dataraw);
  }
};
