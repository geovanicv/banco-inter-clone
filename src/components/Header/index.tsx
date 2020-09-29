import React from 'react';
import { BancoInter } from '../../assets/images';
import Button from '../Button';
import Gradient from '../Gradient';
import AccountDropDown from './AccountDropDown';

import { Container, Wrapper, LeftNav, RightNav } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <LeftNav>
          <BancoInter />
          Internet Banking
        </LeftNav>
        <RightNav>
          <Button variant="secondary">Simulador Renda Fixa</Button>
          <AccountDropDown name="Geovani Cavalcante" />
        </RightNav>
      </Wrapper>
      <Gradient />
    </Container>
  );
};

export default Header;
