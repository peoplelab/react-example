import AsyncComponent from '../generators/AsyncComponent';
import Home from './Home';

export const createRoutes = () => ({
  primary: [
    {
      path: '/',
      key: 'home',
      exact: true,
      component: Home
    },
    {
      path: '/redux',
      key: 'redux-store',
      exact: true,
      component: AsyncComponent(() => import(/* webpackChunkName: "ReduxStore" */ './ReduxStore'))
    },
    {
      path: '/states',
      key: 'states',
      exact: true,
      component: AsyncComponent(() => import(/* webpackChunkName: "States" */ './States')),
    }
  ]
  // secondary
  // logged
  // external
});
export default createRoutes;
