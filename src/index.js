import React from 'react';
import ReactDOM from 'react-dom';
import { setConfig } from 'react-hot-loader';
import App from './containers/App';
import createStore from './store';


if (process.env.NODE_ENV !== 'PRODUCTION') {
  setConfig({ logLevel: 'debug' });
}

// eslint-disable-next-line no-underscore-dangle
window._STORE = createStore();


ReactDOM.render(
  React.createElement(App, {}, null),
  // <App store={store()} />,
  document.getElementById('root'),
);
