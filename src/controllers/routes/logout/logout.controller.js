//-------------------------------------------------------------------
// Logout controller: controller for logout
//-------------------------------------------------------------------
import { apiLogout } from '../../../models/routes/logout/logout.model';
import history from '../../../models/common/history';
import { types } from '../../../store/session.store';
import store from '../../../store/redux.store';
import { base } from '../../common/controller.base';


// call api to do logout and reset to initial state the session storage
export const callLogout = async ({ headers }) => {
  base({
    api: apiLogout,
    success: () => {
      store.dispatch({ type: types.RESET_SESSION });
      history.push('/login');
    },
  });
};
