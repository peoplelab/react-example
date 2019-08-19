//-------------------------------------------------------------------
// Tools controller: controller for tools
//-------------------------------------------------------------------
import { apiList, apiDetails } from '../../../models/routes/tools/tools.model';
import { types } from '../../../store/routes/tools.store';


// call api to retrive tools list and save it into context storage
export const callToolsList = async ({ context }) => {
  const [, dispatch] = context.toolsContext;
  const [state] = context.sessionContext;

  const headers = {
    Authorization: `Bearer ${state.session.accessToken}`,
    Session: state.session.sessionId,
  };

  const response = apiList(headers);

  const { httpcode, dataraw, error } = await response;

  if (error) {
    dispatch({ type: types.TOOLS_FAILURE, payload: error });

    console.log('> tools list failure');
    console.log(error);
  } else if (httpcode === 200) {
    dispatch({ type: types.TOOLS_SUCCESS, payload: dataraw });

    console.log('> tools list success');
    console.log(dataraw);
  } else {
    dispatch({ type: types.TOOLS_ERROR, payload: dataraw });

    console.log('> tools list error');
    console.log(dataraw);
  }
};


// call api to retrive tool details and save it into context storage
export const callToolDetails = async ({ data, context }) => {
  const id = data;

  const [, dispatch] = context.toolsContext;
  const [state] = context.sessionContext;

  const headers = {
    Authorization: `Bearer ${state.session.accessToken}`,
    Session: state.session.sessionId,
  };

  const response = apiDetails(id, headers);

  const { httpcode, dataraw, error } = await response;

  if (error) {
    dispatch({ type: types.ID_TOOL_FAILURE, payload: error });

    console.log('> tools list failure');
    console.log(error);
  } else if (httpcode === 200) {
    dispatch({ type: types.ID_TOOL_SUCCESS, payload: dataraw });

    console.log('> tools list success');
    console.log(dataraw);
  } else {
    dispatch({ type: types.ID_TOOL_ERROR, payload: dataraw });

    console.log('> tools list error');
    console.log(dataraw);
  }
};
