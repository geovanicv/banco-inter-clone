import React from 'react';
import { ThemeProvider } from 'styled-components';
import { AnimatePresence } from 'framer-motion';

import GlobalStyles from './styles/global';
import theme from './styles/themes';

import Dashboard from './pages/Dashboard';

// import { Container } from './styles';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <AnimatePresence exitBeforeEnter>
      <Dashboard />
    </AnimatePresence>
  </ThemeProvider>
);

export default App;
