import React from 'react';
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import MainContent from '../MainContent/MainContent';
import Footer from '../Footer/Footer';

import './PageWrapper.scss';

// const PageWrapper = (props) => {
//   const { path, setSagaTestAction } = props;
// return (
//   <div className="page-wrapper">
//     <Header />
//     <MainContent />
//     <Footer />
//   </div>
// );
// };

class PageWrapper extends React.Component {
  componentDidMount() {
    const { setSagaTestAction } = this.props;
    setSagaTestAction();
  }

  render() {
    return (
      <div className="page-wrapper">
        <Header />
        <MainContent />
        <Footer />
      </div>
    );
  }
}

PageWrapper.propTypes = {
  path: PropTypes.string,
  setSagaTestAction: PropTypes.func.isRequired,
};

PageWrapper.defaultProps = {
  path: '',
};

export default hot(module)(PageWrapper);
