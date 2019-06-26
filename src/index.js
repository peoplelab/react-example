import React from 'react';
import ReactDOM from 'react-dom';
import { setConfig } from 'react-hot-loader';
import App from './containers/App';
import createStore from './store';


// eslint-disable-next-line no-undef
if(process.env.NODE_ENV !== 'PRODUCTION') {
  setConfig({ logLevel: 'debug' });
}

const store = createStore();


ReactDOM.render(
  React.createElement(App, { store }, null),
  // <App store={store()} />,
  document.getElementById('root')
);
