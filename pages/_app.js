/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../components';

const theme = {
  main: '#0070f3',
};

const App = ({ Component, pageProps }) => (
  <>
    {/* Font styles and basic CSS Reset */}
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </>
);
App.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
};
export default App;
