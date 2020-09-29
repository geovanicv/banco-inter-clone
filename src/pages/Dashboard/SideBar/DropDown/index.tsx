import React, { ReactNode } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { Container } from './styles';

interface DropdownProps {
  icon: ReactNode;
  sectionName: string;
}

const DropDown: React.FC<DropdownProps> = ({ icon, sectionName }) => {
  return (
    <Container variant="transparent">
      <div>{icon}</div>
      {sectionName}

      <FiChevronDown />
    </Container>
  );
};

export default DropDown;
