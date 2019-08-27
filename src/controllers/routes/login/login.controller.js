//----------------------------------------------------------------------------------------
// File: login.controller.js
//
// Path: /src/controllers/login/login.controller
//----------------------------------------------------------------------------------------


import { apiLogin, apiCultureGet, apiLastLogin } from '../../../models/routes/login/login.model';
import history from '../../../models/common/history';
import store from '../../../store/redux.store';
import { types } from '../../../store/session.store';
import { base } from '../../common/controller.base';


// chimata di login e inizializzazione della sessione utente
export const callLogin = async ({ data, dispatch }) => {
  const request = {
    UserName: data.username,
    Password: data.password,
    Culture: data.culture,
  };

  base({
    request,
    api: apiLogin,
    success: ({ dataraw }) => {
      store.dispatch({
        type: types.SET_SESSION,
        payload: dataraw,
      });
      dispatch({ errorOnLogin: false });
      history.push('/');
    },
    failure: () => {
      dispatch({ errorOnLogin: true });
    }
  });
};

// richiesta per il recupero della lista delle culture da passare alla view
export const callCultureGet = async ({ dispatch }) => {
  base({
    api: apiCultureGet,
    success: ({ dataraw }) => {
      dispatch({ cultureList: dataraw });
    },
    failure: ({ dataraw, error }) => {
      dispatch({ cultureList: dataraw || error });
    }
  });
};

// richiesta per il recupero della lista degli ultimi accessi da passare alla view
export const callLastLogin = async ({ dispatch }) => {
  base({
    api: apiLastLogin,
    success: ({ dataraw }) => {
      dispatch({ usersList: dataraw });
    },
    failure: ({ dataraw, error }) => {
      dispatch({ usersList: dataraw || error });
    }
  });
};



// //-------------------------------------------------------------------
// // Login controller: controller for login
// //-------------------------------------------------------------------
// import { apiLogin } from '../../../models/routes/login/login.model';
// // import history from '../../../models/common/history';
// // import { types } from '../../../store/session.store.jsx';


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
