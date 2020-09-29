import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import Button from '../../../../components/Button';
import cardsNavigations from '../../../../resources/cardsNavigations';
import { Container, Card, Navigation } from './styles';

const NavigationCards: React.FC = () => {
  return (
    <Container>
      <Navigation>
        {Object.entries(cardsNavigations).map(([key, value]) => (
          <Card key={key}>
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
