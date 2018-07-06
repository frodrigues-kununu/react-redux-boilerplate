import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './containers/App/App';

// exact
export default (
  <div>
    <Switch>
      <Route exact path="/" component={App} />
      <Route component={App} />
    </Switch>
  </div>
);
