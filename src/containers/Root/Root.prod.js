import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Provider } from 'react-redux';
import routes from '../routes';
import { HashRouter } from 'react-router-dom';

/**
 *Container that specifies the Root component configuration for the production environment.
 *
 * @param {object} props
 * @returns Root production component
 */
const Root = (props) => {
  const { store } = props;
  return (
    <Provider store={store}>
      <div>
        <HashRouter>
          {routes}
        </HashRouter>
      </div>
    </Provider>
  );
};

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};
