import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
// import PropTypes from 'prop-types';
import createRoutes from './Router';
import { logged } from '../controllers/common/session';
import { SessionContext } from '../store/session';


/**
 * Iterate an array of objects to return the application routes
 * @param {*} routeProps Route properties
 */
const mapRoutes = (routeProps) => {
  const {
    Component,
    path,
    key,
    ...rest
  } = routeProps;

  return (
    <Route {...rest} path={path} key={`route-${key}`}>
      <Component />
    </Route>
  );
};


/**
 * Define and handle navigation components routes
 */
class MainComponent extends PureComponent {
  static contextType = SessionContext;

  render() {
    const [state] = this.context;
    /**
     * Retrive the store to inject it into the routes
     */
    const isUserLogged = logged(state.session);

    /**
     * Inject the store into the routes and retrive their map
     */
    const routes = createRoutes();

    /**
     * List of primary routes
     */
    const Primary = routes.primary.map(mapRoutes);
    const Secondary = routes.secondary.map(mapRoutes);
    const Logged = isUserLogged ? routes.logged.map(mapRoutes) : null;
    // const Messages = isUserLogged && routes.messages.map(mapRoutes);
    const External = routes.external.map(mapRoutes);

    return (
      <Switch>
        {/* <Template> */}
          {Primary}
        {/* </Template> */}
        {Secondary}
        {Logged}
        {/* {Messages} */}
        {External}
      </Switch>
    );
  }
}


/**
 * Define component properties types
 */
MainComponent.propTypes = {
};

/**
 * Define default value of component properties
 */
MainComponent.defaultProps = {
};


export default MainComponent;
