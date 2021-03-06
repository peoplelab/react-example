import AsyncComponent from '../generators/AsyncComponent';
import Home from './Home';


const createRoutes = () => ({
  primary: [
    {
      path: '/',
      key: 'home',
      exact: true,
      component: Home,
    },
    {
      path: '/redux',
      key: 'redux-store',
      exact: true,
      component: AsyncComponent(() => import(/* webpackChunkName: "ReduxStore" */ './ReduxStore')),
    },
    {
      path: '/states',
      key: 'states',
      exact: true,
      component: AsyncComponent(() => import(/* webpackChunkName: "States" */ './States')),
    },
    {
      path: '/page1',
      key: 'page1',
      exact: true,
      component: AsyncComponent(() => import(/* webpackChunkName: "Page1" */ './Page1')),
    },
    {
      path: '/middleware',
      key: 'middleware-route',
      exact: true,
      component: AsyncComponent(() => import(/* webpackChunkName: "MiddlewareRoute" */ './MiddlewareRoute')),
    },
    {
      path: '/sagas',
      key: 'sagas-route',
      exact: true,
      component: AsyncComponent(() => import(/* webpackChunkName: "SagasRoute" */ './SagasRoute')),
    },
    {
      path: '/purejs',
      key: 'pure-js',
      exact: true,
      component: AsyncComponent(() => import(/* webpackChunkName: "PureJS" */ './PureJS')),
    },
    {
      path: '/asyncroute',
      key: 'async-route',
      exact: true,
      component: AsyncComponent(() => import(/* webpackChunkName: "AsyncRoute" */ './AsyncRoute')),
    },
  ],
  // secondary
  // logged
  // external
});


export default createRoutes;
