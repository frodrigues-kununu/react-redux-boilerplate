import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import routes from '../../routes';
import DevTools from '../DevTools/DevTools';


/**
 *Container that specifies the Root component configuration for the development environment.
 *
 * @param {object} props
 * @returns Root development component
 */
const Root = (props) => {
  const { store, history } = props;
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <HashRouter>
            {routes}
          </HashRouter>
          <DevTools />
        </div>
      </ConnectedRouter>
    </Provider>
  );
};

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default Root;
