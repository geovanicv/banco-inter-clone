import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import Button from '../../../../components/Button';

import { Balance, Container } from './styles';

const AccountBalance: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Container>
      <Balance>
        <span>Saldo em Conta:</span>
        {isVisible ? (
          <>
            <strong>R$256.545,00</strong>
          </>
        ) : (
          <span />
        )}
      </Balance>

      <Button
        variant="transparent"
        onClick={() => setIsVisible(prevState => !prevState)}
      >
        {isVisible ? <FiEye /> : <FiEyeOff />}
      </Button>
    </Container>
  );
};

export default AccountBalance;
