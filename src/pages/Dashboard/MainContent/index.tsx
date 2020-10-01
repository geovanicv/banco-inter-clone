import React from 'react';
import AccountSummary from './AccountSummary';
import NavigationCards from './NavigationCards';

import { Container } from './styles';

const MainContent: React.FC = () => {
  return (
    <Container>
      <NavigationCards />
      <AccountSummary />
    </Container>
  );
};

export default MainContent;
