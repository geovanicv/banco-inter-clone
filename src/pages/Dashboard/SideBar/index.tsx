import React from 'react';
import { FiBarChart2 } from 'react-icons/fi';
import DropDown from './DropDown';
import dashboardNavigation from '../../../resources/dashboardNavigation';
import { AmountInvested, Container } from './styles';
import AccountBalance from './AccountBalance';

const SideBar: React.FC = () => {
  return (
    <Container>
      <AccountBalance />
      <AmountInvested>
        Ver Total Investido <FiBarChart2 size="1.6rem" />
      </AmountInvested>
      {Object.entries(dashboardNavigation).map(([key, value]) => (
        <DropDown key={key} icon={value.icon} sectionName={key} />
      ))}
    </Container>
  );
};

export default SideBar;
