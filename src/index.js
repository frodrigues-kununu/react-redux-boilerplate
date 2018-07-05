import React from 'react';
import { render } from 'react-dom';
// import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import Root from './containers/Root';
import configureStore from './store/configureStore';
//app styles
require("./stylesheets/index.scss");

/* configure redux store for production or development development depending on
the value of NODE_ENV */
const store = configureStore();
//synchronize history object with the redux store
const history = syncHistoryWithStore(createBrowserHistory(), store);

/* pass the store and the history to the Root of the app
Root will be configured for production or development depending on
the value of NODE_ENV */
render(
  <Root store={store} history={history} />,
  document.getElementById('root')
);


export default store;
