import React, { useState } from 'react';

import {
  FiFileText,
  FiCreditCard,
  FiShield,
  FiEye,
  FiEyeOff,
} from 'react-icons/fi';

import Button from '../../../../components/Button';
import CreditCardIllustration from '../../../../assets/images/illustrations/card-illustration.png';
import { DEFAULT_TRANSITION } from '../../../../constants';

import {
  Container,
  Card,
  Header,
  DataWrapper,
  LeftData,
  RightData,
  DataValue,
} from './styles';

const containerAnimation = {
  unMounted: { y: -50, opacity: 0 },
  mounted: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      when: 'beforeChildren',
      staggerChildren: 0.3,
    },
  },
};

const cardsAnimation = {
  unMounted: { y: -25, opacity: 0 },
  mounted: { y: 0, opacity: 1 },
};

const AccountSummary: React.FC = () => {
  const [displayStatement, setDisplayStatement] = useState(true);
  const [displayInvestments, setDisplayInvestments] = useState(true);

  return (
    <Container variants={containerAnimation}>
      <Card
        layout
        key="statement"
        variants={cardsAnimation}
        transition={DEFAULT_TRANSITION}
      >
        <Header>
          <FiFileText />
          <span>Extrato</span>
          <Button
            variant="transparent"
            onClick={() => setDisplayStatement(prevState => !prevState)}
          >
            {displayStatement ? <FiEye /> : <FiEyeOff />}
          </Button>
        </Header>
        <DataWrapper>
          <LeftData>Grafico</LeftData>
          <RightData>
            <span>Receita</span>
            <DataValue green>
              {displayStatement ? 'R$ 8.522,22' : '---'}
            </DataValue>
            <span>Despesas</span>
            <DataValue red>
              {displayStatement ? 'R$ 7.948,55' : '---'}
            </DataValue>
          </RightData>
        </DataWrapper>
      </Card>

      <Card
        layout
        key="credit-card"
        variants={cardsAnimation}
        transition={DEFAULT_TRANSITION}
      >
        <Header>
          <FiCreditCard />
          <span>Mastercard 8430 </span>
        </Header>
        <DataWrapper>
          <LeftData>
            <img src={CreditCardIllustration} alt="" />
          </LeftData>
          <RightData>
            <DataValue>Seu cartão é Mastercard sem anuidade</DataValue>
          </RightData>
        </DataWrapper>
      </Card>

      <Card
        layout
        key="credit-card"
        variants={cardsAnimation}
        transition={DEFAULT_TRANSITION}
      >
        <Header>
          <FiShield />
          <span>Plataforma Aberta Inter</span>
          <Button
            variant="transparent"
            onClick={() => setDisplayInvestments(prevState => !prevState)}
          >
            {displayInvestments ? <FiEye /> : <FiEyeOff />}
          </Button>
        </Header>
        <DataWrapper>
          <LeftData>Grafico</LeftData>
          <RightData>
            <span>Total investido</span>
            <DataValue>{displayInvestments ? 'R$ 5.800,00' : '---'}</DataValue>
            <span>Evolução no mês</span>
            <DataValue>{displayInvestments ? '20%' : '---'}</DataValue>
          </RightData>
        </DataWrapper>
      </Card>
    </Container>
  );
};

export default AccountSummary;
