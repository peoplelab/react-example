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


// Definizione del gestore delle pagine dell'applicativo
class MainComponent extends Component {
  constructor(props) {
    super(props);

    this.timer = null;
  }

  // A componente montato, verifica che la sessione sia valida entro un determinato lasso di tempo, indicato nella response del servizio di login
  componentDidUpdate() {
    if (this.timer !== null) {
      clearTimeout(this.timer);
    }

    this.timer = SessionValidity();
  }

  render() {
    const { isUserLogged } = this.props;

    // Recupero delle pagine dell'applicativo
    const routes = createRoutes();

    const Primary = routes.primary.map(mapRoutes);                   // Lista delle pagine pubbliche
    const Logged = isUserLogged && routes.logged.map(mapRoutes);     // Lista delle pagine private
    // const Secondary = routes.secondary.map(mapRoutes);               // Pagine pubbliche di supporto
    // const Messages = isUserLogged && routes.messages.map(mapRoutes); // Pagine private di supporto
    // const External = routes.external.map(mapRoutes);                 // Lista delle landing page esterne all'applicativo

    return (
      <Switch>
        {/* <PrimaryTemplate> */}
          {Primary}
        {/* </PrimaryTemplate> */}

        {/* <LoggedTemplate> */}
        {Logged}
        {/* </LoggedTemplate> */}

        {/* {Secondary} */}
        {/* {Messages} */}
        {/* {External} */}
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
