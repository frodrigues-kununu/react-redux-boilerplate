import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from './containers/App';

// exact
export default (
    <div>
        <Route path='/test' component={App} />
        <Route component={App} />
    </div>
);
