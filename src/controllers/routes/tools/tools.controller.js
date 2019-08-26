//-------------------------------------------------------------------
// Tools controller: controller for tools
//-------------------------------------------------------------------
import { apiList, apiDetails } from '../../../models/routes/tools/tools.model';
import { base } from '../../common/controller.base';


// call api to retrive tools list and save it into context storage
export const callToolsList = async ({ dispatch }) => {
  base({
    api: apiList,
    success: ({ dataraw }) => {
      dispatch({ list: dataraw });
    },
    failure: () => {
      dispatch({ list: [] });
    }
  });
};


// call api to retrive tool details and save it into context storage
export const callToolDetails = async ({ data, dispatch }) => {
  const params = {
    id: data
  };

  base({
    params,
    api: apiDetails,
    success: ({ dataraw }) => {
      dispatch({ details: dataraw });
    },
    failure: () => {
      dispatch({ details: {} });
    }
  });
};
