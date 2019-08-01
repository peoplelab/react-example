import React, { Component } from 'react';
import { Router } from "react-router"; // Handle navigation into the app
import { hot } from 'react-hot-loader/root';
import Main from './Main'; // Handle routes tree
import { SessionProvider } from '../store/session'; // Session storage
import history from '../models/common/history'; // Browser history handler
import { getUserIP } from '../models/common/userIP'; // Get user ip address

import '../styles/main.scss'; // apply common style to application


/**
 * Define root structor of the app
 */
class AppComponent extends Component {
  componentDidMount() {
    getUserIP();
  }
  render() {
    return (
      <SessionProvider>
        <Router history={history}>
          <Main />
        </Router>
      </SessionProvider>
    );
  }
}


AppComponent.propTypes = {
};

AppComponent.defaultProps = {
};


export default hot(AppComponent);
