import React from 'react';
import App from "next/app";
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import PropTypes from 'prop-types';
import { initStore } from '../store/store';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: {
        // Call page-level getInitialProps
        ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {})
      }
    };
  }
  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
};

MyApp.propTypes = {
  store: PropTypes.object.isRequired,
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.any
};

export default withRedux(initStore)(MyApp);