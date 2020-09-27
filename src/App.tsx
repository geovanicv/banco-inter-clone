import React from 'react';
import { ThemeProvider } from 'styled-components';
import Gradient from './components/Gradient';
import Header from './components/Header';

import GlobalStyles from './styles/global';
import theme from './styles/themes';

// import { Container } from './styles';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Header />
    <Gradient />
  </ThemeProvider>
);

export default App;
