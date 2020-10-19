import React from 'react';
import { FiBarChart2 } from 'react-icons/fi';
import DropDown from './DropDown';
import sideBarNavigation from '../../../resources/sideBarNavigation';
import { Wrapper, AmountInvested, Container } from './styles';
import AccountBalance from './AccountBalance';
import HelpDesk from './HelpDesk';
import { useAuth } from '../../../hooks/auth';

const SideBar: React.FC = () => {
  const { name } = useAuth();

  return (
    <Wrapper>
      <Container>
        <AccountBalance />
        <AmountInvested>
          Ver Total Investido <FiBarChart2 size="1.6rem" />
        </AmountInvested>
        {Object.entries(sideBarNavigation).map(([key, value]) => (
          <DropDown key={key} icon={value.icon} sectionName={key} />
        ))}
      </Container>
      <HelpDesk name={name} />
    </Wrapper>
  );
};

export default SideBar;
