import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import createRoutes from './Router';
import { SessionValidity } from '../controllers/session.controller';


/**
 * Iterate an array of objects to return the application routes
 * @param {*} routeProps Route properties
 */
const mapRoutes = (routeProps) => {
  const {
    Component,
    Store,
    path,
    key,
    ...rest
  } = routeProps;

  return (
    <Route {...rest} path={path} key={`route-${key}`}>
      {!Store ? (
        <Component />
      ) : (
        <Store>
          <Component />
        </Store>
      )}
    </Route>
  );
};


/**
 * Define and handle navigation components routes
 */
class MainComponent extends Component {
  constructor(props) {
    super(props);

    this.timer = null;
  }

  componentDidUpdate() {
    if (this.timer !== null) {
      clearTimeout(this.timer);
    }

    this.timer = SessionValidity();
  }

  render() {
    const { isUserLogged } = this.props;

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
  isUserLogged: PropTypes.bool.isRequired,
};

/**
 * Define default value of component properties
 */
MainComponent.defaultProps = {
};


export default MainComponent;
