//-------------------------------------------------------------------
// Login controller: controller for login
//-------------------------------------------------------------------
import { apiLogin } from '../../../models/routes/login/login.model';
import history from '../../../models/common/history';
import { types } from '../../../store/session.store';


export const callLogin = async ({ data, context }) => {
    const [, dispatch] = context;

  const request = {
    UserName: data.username,
    Password: data.password,
    Culture: data.culture,
  };

  const response = apiLogin(request);

  const { httpcode, dataraw, error } = await response;

  if (error) {
    dispatch({
      type: types.SESSION_FAILURE,
      payload: error,
    });

    console.log('> login failure');
    console.log(error);
  } else if (httpcode === 200) {
    dispatch({
      type: types.SESSION_SUCCESS,
      payload: dataraw,
    });

    console.log('> login success');
    console.log(dataraw);
    history.push('/');
  } else {
    dispatch({
      type: types.SESSION_ERROR,
      payload: dataraw,
    });

    console.log('> login error');
    console.log(dataraw);
  }
};
