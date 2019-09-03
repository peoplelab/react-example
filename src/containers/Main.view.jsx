//-----------------------------------------------------------------------------------
// File: Main.view.jsx
//
// Desc: Componente per la gestione delle pagine dell'applicazione
// Path: /src/container/Main.view
//-----------------------------------------------------------------------------------


import React, { memo } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import createRoutes from './Router';


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
const MainComponent = (props) => {
  const { isUserLogged } = props;

  // Recupero delle pagine dell'applicativo
  const routes = createRoutes();

  const Primary = routes.primary.map(mapRoutes);                   // Lista delle pagine pubbliche
  const Logged = isUserLogged && routes.logged.map(mapRoutes);     // Lista delle pagine private
  // const Secondary = routes.secondary.map(mapRoutes);               // Pagine pubbliche di supporto
  // const Messages = isUserLogged && routes.messages.map(mapRoutes); // Pagine private di supporto
  // const External = routes.external.map(mapRoutes);                 // Lista delle landing page esterne all'applicativo

  return (
    <Switch>
      {Primary}
      {Logged}
      {/* {Secondary} */}
      {/* {Messages} */}
      {/* {External} */}
    </Switch>
  );
};


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


export default memo(MainComponent);
