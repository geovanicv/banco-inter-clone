import React from 'react';
import { useTheme } from 'styled-components';

import { Container } from './styles';

interface User {
  name: string;
}

const AccountDropDown: React.FC<User> = ({ name }) => {
  const { lightGrey, secondary } = useTheme().colors;

  const removeHashFromColor = (color: string): string => color.slice(1);

  return (
    <Container>
      <img
        src={`https://ui-avatars.com/api/?rounded=true&bold=true&format=svg&background=${removeHashFromColor(
          lightGrey,
        )}&color=${removeHashFromColor(secondary)}&name=${name}`}
        alt="User"
      />
    </Container>
  );
};

export default AccountDropDown;
