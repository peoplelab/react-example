import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import createStore from './store';


const store = createStore();


ReactDOM.render(
  React.createElement(App, { store }, null),
  // <App store={store()} />,
  document.getElementById('root')
);
