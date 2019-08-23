//-------------------------------------------------------------------
// Login controller: controller for login
//-------------------------------------------------------------------
import { apiLogin, apiCultureGet, apiLastLogin } from '../../../models/routes/login/login.model';
// import history from '../../../models/common/history';
// import { types } from '../../../store/session.store';


// call api to do login and set with valid credentials the session storage
export const callLogin = async ({ data, fn }) => {
  const request = {
    UserName: data.username,
    Password: data.password,
    Culture: data.culture,
  };

  const response = apiLogin(request);

  const { httpcode, dataraw, error } = await response;

  fn(httpcode === 200 ? httpcode : dataraw || error);
};

export const callCultureGet = async ({ fn }) => {
  const response = apiCultureGet();

  const { httpcode, dataraw, error } = await response;

  fn({ options: httpcode === 200 ? dataraw : dataraw || error });
};

export const callLastLogin = async ({ fn }) => {
  const response = apiLastLogin();

  const { httpcode, dataraw, error } = await response;

  fn({ usersList: httpcode === 200 ? dataraw : dataraw || error });
};


// //-------------------------------------------------------------------
// // Login controller: controller for login
// //-------------------------------------------------------------------
// import { apiLogin } from '../../../models/routes/login/login.model';
// // import history from '../../../models/common/history';
// // import { types } from '../../../store/session.store';


// // call api to do login and set with valid credentials the session storage
// export const callLogin = async ({ data, fn }) => {
//     // const [, dispatch] = context;

//   const request = {
//     UserName: data.username,
//     Password: data.password,
//     Culture: data.culture,
//   };

//   const response = apiLogin(request);

//   const { httpcode, dataraw, error } = await response;

//   fn(httpcode === 200 ? httpcode : dataraw || error);

//   // if (error) {
//   //   dispatch({
//   //     type: types.SESSION_FAILURE,
//   //     payload: error,
//   //   });

//   //   console.log('> login failure');
//   //   console.log(error);
//   // } else if (httpcode === 200) {
//   //   dispatch({
//   //     type: types.SESSION_SUCCESS,
//   //     payload: dataraw,
//   //   });

//   //   console.log('> login success');
//   //   console.log(dataraw);
//   //   history.push('/');
//   // } else {
//   //   dispatch({
//   //     type: types.SESSION_ERROR,
//   //     payload: dataraw,
//   //   });

//   //   console.log('> login error');
//   //   console.log(dataraw);
//   // }
// };
