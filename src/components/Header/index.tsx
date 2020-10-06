import React from 'react';
import { BancoInter } from '../../assets/images';
import Button from '../Button';
import Gradient from '../Gradient';
import AccountDropDown from './AccountDropDown';
import { DEFAULT_TRANSITION } from '../../constants';

import { Container, Wrapper, LeftNav, RightNav } from './styles';

const containerAnimation = {
  unMounted: {},
  mounted: {
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.8,
    },
  },
};

const navsAnimation = {
  unMounted: { y: -20, opacity: 0 },
  mounted: {
    y: 0,
    opacity: 1,
    transition: {
      ...DEFAULT_TRANSITION,
    },
  },
};

const Header: React.FC = () => {
  return (
    <Container>
      <Wrapper
        variants={containerAnimation}
        initial="unMounted"
        animate="mounted"
      >
        <LeftNav variants={navsAnimation}>
          <BancoInter />
          Internet Banking
        </LeftNav>
        <RightNav variants={navsAnimation}>
          <Button variant="secondary">Simulador Renda Fixa</Button>
          <AccountDropDown name="Geovani Cavalcante" />
        </RightNav>
      </Wrapper>
      <Gradient />
    </Container>
  );
};

export default Header;
