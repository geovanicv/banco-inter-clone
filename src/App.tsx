import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/global';
import theme from './styles/themes';

import Dashboard from './pages/Dashboard';

// import { Container } from './styles';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Dashboard />
  </ThemeProvider>
);

export default App;
