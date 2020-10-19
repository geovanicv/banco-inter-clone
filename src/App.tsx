import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';
import GlobalStyles from './styles/global';
import theme from './styles/themes';

import { AuthProvider } from './hooks/auth';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <AuthProvider>
      <Router>
        <GlobalStyles />
        <Routes />
      </Router>
    </AuthProvider>
  </ThemeProvider>
);

export default App;
