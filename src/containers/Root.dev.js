import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Provider } from 'react-redux';
import routes from '../routes';
import DevTools from './DevTools';
import { BrowserRouter as Router } from 'react-router-dom';


/**
 * Container that specifies the Root component configuration for the development environment.
 * 
 * @export
 * @class Root
 * @extends {Component}
 */
export default class Root extends Component {

	/**
	 * Renders the root component
	 * 
	 * @returns jsx
	 * @memberof Root
	 */
	render() {
		const { store } = this.props;
		return (
			<Provider store={store} >
				<div>
					<Router>
							{routes}
					</Router>
					<DevTools />
				</div>
			</Provider >
		);
	}
}

Root.propTypes = {
	store: PropTypes.object.isRequired,
	history: PropTypes.object.isRequired
};
