import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { connectRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';
import App from './containers/App/App';
import DevTools from './containers/DevTools/DevTools';

import configureStore from './store/configureStore';
import Root from './containers/Root/Root';

//app styles
import "./stylesheets/index.scss";


const storeConfig = configureStore();

const { history, store } = storeConfig;

//const render = () => {
render(
  <Root store={store} history={history} />,
  document.getElementById('root'),
);

export default store;
