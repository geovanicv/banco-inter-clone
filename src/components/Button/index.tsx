import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

export type ButtonVariants = 'secondary' | 'transparent';

export type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariants;
};

const Button: React.FC<IButtonProps> = ({
  children,
  type,
  variant,
  ...props
}) => {
  return (
    <Container type={type || 'button'} variant={variant} {...props}>
      {children}
    </Container>
  );
};

export default Button;
