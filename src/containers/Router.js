//----------------------------------------------------------------------------------------
// File: Router.js		[main]
//
// Desc: Definizione delle routes mappate dell'applicazione
// Path: /src/components/routes
//----------------------------------------------------------------------------------------

import lazy from '../components/common/AsyncComponent';

/**
 * Inject the store into the routes and retur a map of their.
 *
 * Note: the routes are mapped in macro category
 */
const createRoutes = store => ({
  /**
   * Map of routes of main flow
   *
   * Note: These route do not require login by user
   */
  primary: [
    {
      path: '/',
      key: 'home',
      exact: true,
      Component: lazy(() => import(/* webpackChunkName: "Home" */ '../components/routes/home/home.view')),
    },
    {
      path: '/login',
      key: 'login',
      exact: true,
      Component: lazy(() => import(/* webpackChunkName: "Login" */ '../components/routes/login/login.view')),
    },
  ],
  /**
   * Map of support routes of main flow
   *
   * Note: login by user not required
   */
  secondary: [],
  /**
   * Map of routes that required login by user.
   */
  logged: [
    {
      path: '/tools',
      key: 'tools',
      exact: true,
      Component: lazy(() => import(/* webpackChunkName: "Tools" */ '../components/routes/tools/tools.view')),
    },
    // {
    //   path: '/cultures',
    //   key: 'cultures',
    //   exact: true,
    //   Component: lazy(() => import(/* webpackChunkName: "Cultures" */ './Cultures/Cultures.index')),
    // },
  ],
  /**
   * Map of support routes of user logged flow
   *
   * Note: login by user required.
   */
  messages: [],
  /**
   * Landing page routes separated from other flows
   *
   * Note: login by user not required
   */
  external: [],
});


export default createRoutes;
