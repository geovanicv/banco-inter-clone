import React from 'react';
import {ThemeProvider} from 'styled-components';

import GlobalStyles from './styles/global';
import theme from './styles/themes';

// import { Container } from './styles';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <h1>Hello</h1>
  </ThemeProvider>
)

export default App;
