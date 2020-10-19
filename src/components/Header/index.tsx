import React from 'react';
import { BancoInter } from '../../assets/images';
import Button from '../Button';
import Gradient from '../Gradient';
import AccountDropDown from './AccountDropDown';
import { DEFAULT_TRANSITION } from '../../constants';

import { Container, Wrapper, LeftNav, RightNav } from './styles';
import { useAuth } from '../../hooks/auth';

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
  const { name } = useAuth();

  return (
    <Container
      variants={containerAnimation}
      initial="unMounted"
      animate="mounted"
    >
      <Wrapper>
        <LeftNav variants={navsAnimation}>
          <BancoInter />
          Internet Banking
        </LeftNav>
        <RightNav variants={navsAnimation}>
          <Button variant="secondary">Simulador Renda Fixa</Button>
          <AccountDropDown name={name} />
        </RightNav>
      </Wrapper>
      <Gradient />
    </Container>
  );
};

export default Header;
