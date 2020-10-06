import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import Button from '../../../../components/Button';
import cardsNavigations from '../../../../resources/cardsNavigations';
import { Container, Card, Navigation } from './styles';
import { DEFAULT_TRANSITION } from '../../../../constants';

const containerAnimation = {
  unMounted: { y: -50, opacity: 0 },
  mounted: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.15,
      when: 'beforeChildren',
      staggerChildren: 0.2,
      ...DEFAULT_TRANSITION,
    },
  },
};

const cardsAnimation = {
  unMounted: { y: -50, opacity: 0 },
  mounted: { y: 0, opacity: 1 },
};

const NavigationCards: React.FC = () => {
  return (
    <Container variants={containerAnimation}>
      <Navigation>
        {Object.entries(cardsNavigations).map(([key, value]) => (
          <Card
            layout
            key={`card-${key}`}
            variants={cardsAnimation}
            transition={DEFAULT_TRANSITION}
            whileHover={{ y: -4, transition: DEFAULT_TRANSITION }}
            whileTap={{ y: 2, transition: DEFAULT_TRANSITION }}
          >
            <div>{value.icon}</div>
            {key}
          </Card>
        ))}
      </Navigation>
      <Button>
        <FiArrowRight />
      </Button>
    </Container>
  );
};

export default NavigationCards;
