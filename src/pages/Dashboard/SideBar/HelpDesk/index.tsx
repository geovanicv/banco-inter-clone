import React from 'react';

import { FiArrowRight } from 'react-icons/fi';

import { Container, HelpButton } from './styles';
import BabiHelpDesk from '../../../../assets/images/illustrations/babi.png';

interface User {
  name: string;
}

const HelpDesk: React.FC<User> = ({ name }) => {
  return (
    <Container>
      <img src={BabiHelpDesk} alt="Eu sou a Babi do Banco Inter" />
      <span>
        Olá, {name} <br /> Posso Ajudar?
      </span>
      <HelpButton>
        <FiArrowRight size={24} />
      </HelpButton>
    </Container>
  );
};

export default HelpDesk;
