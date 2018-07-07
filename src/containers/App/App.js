import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import MainContent from '../../components/MainContent/MainContent';
import Footer from '../../components/Footer/Footer';

// import { } from '../actions/index';

const App = (props) => {
  const { path } = props;
  return (
    <div className="page-wrapper">
      <Header />
      <MainContent />
      <Footer />
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
