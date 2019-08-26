//-------------------------------------------------------------------
// Login controller: controller for login
//-------------------------------------------------------------------
import { apiLogin, apiCultureGet, apiLastLogin } from '../../../models/routes/login/login.model';
import history from '../../../models/common/history';
import store from '../../../store/redux.store';
import { types } from '../../../store/session.store';


// call api to do login and set with valid credentials the session storage
export const callLogin = async ({ data, fn }) => {
  const request = {
    UserName: data.username,
    Password: data.password,
    Culture: data.culture,
  };

  const response = apiLogin(request);

  const { httpcode, dataraw, error } = await response;

  if (httpcode === 200) {
    store.dispatch({
      type: types.SET_SESSION,
      payload: dataraw,
    });
    fn({ errorOnLogin: false });
    history.push('/');

    console.log('> login success');
    console.log(dataraw);
  } else {
    fn({ errorOnLogin: true });

    console.log('> login error');
    console.log(dataraw);
    console.log(error);
  }
};

export const callCultureGet = async ({ fn }) => {
  const response = apiCultureGet();

  const { httpcode, dataraw, error } = await response;

  fn({ cultureList: httpcode === 200 ? dataraw : dataraw || error });
};

export const callLastLogin = async ({ fn }) => {
  const response = apiLastLogin();

  const { httpcode, dataraw, error } = await response;

  fn({ usersList: httpcode === 200 ? dataraw : dataraw || error });
};
