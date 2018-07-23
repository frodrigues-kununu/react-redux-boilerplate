import React from 'react';
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import './App.scss';

import {
  setSagaTestAction
} from '../../actions/appActions';

const App = (props) => {
  const { path, setSagaTestAction } = props;
  return (
    <PageWrapper setSagaTestAction={setSagaTestAction} />
  );
};

function mapStateToProps(state) {
  const {
    testReducer: { path },
  } = state;
  return {
    path,
  };
}

function mapStateToProps(state) {
  return { todos: state.todos }
}

const mapDispatchToProps = {
  setSagaTestAction
};

App.propTypes = {
  path: PropTypes.string,
  setSagaTestAction: PropTypes.func.isRequired,
};

App.defaultProps = {
  path: '',
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
