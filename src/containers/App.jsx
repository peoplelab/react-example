import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router } from "react-router"; // Handle navigation into the app
import { hot } from 'react-hot-loader/root';
import Main from './Main.container'; // Handle routes tree
import history from '../models/common/history'; // Browser history handler
import { getUserIP } from '../models/common/userIP'; // Get user ip address
import store from '../store/redux.store';

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
      <Provider store={store}>
        <Router history={history}>
          <Main />
        </Router>
      </Provider>
    );
  }
}


AppComponent.propTypes = {
};

AppComponent.defaultProps = {
};


export default hot(AppComponent);
