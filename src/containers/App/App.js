import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// import { } from '../actions/index';

const App = (props) => {
  const { path } = props;
  return (
    <div path={path}>
     <div>teste</div>
     <div>hot</div>
     <div>modules</div>
    </div>
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

App.propTypes = {
  path: PropTypes.string,
};

App.defaultProps = {
  path: '',
};

export default connect(mapStateToProps, {})(App);
