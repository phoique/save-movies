import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import PropTypes from 'prop-types';
import { initStore } from '../store/store';

const App = ({ Component, pageProps, store }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

App.propTypes = {
  store: PropTypes.object.isRequired,
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.any
};

export default withRedux(initStore)(App);