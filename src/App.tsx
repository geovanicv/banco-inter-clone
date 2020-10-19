import React from 'react';
import { ThemeProvider } from 'styled-components';
import { AnimatePresence } from 'framer-motion';

import GlobalStyles from './styles/global';
import theme from './styles/themes';

import Dashboard from './pages/Dashboard';

import { AuthProvider } from './hooks/auth';

const App: React.FC = () => (
  <AuthProvider>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AnimatePresence exitBeforeEnter>
        <Dashboard />
      </AnimatePresence>
    </ThemeProvider>
  </AuthProvider>
);

export default App;
