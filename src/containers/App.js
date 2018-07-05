import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';

// import { } from '../actions/index';

class App extends Component {
	constructor(props) {
		super(props);
	}


	render() {
		return (
			<div>Basic setup</div>
		);
	}
}

function mapStateToProps(state) {
	const {
		testReducer: { path },
	} = state;
	return {
		path,
	};
}

export default connect(mapStateToProps, { })(App);
