import styled, { css } from 'styled-components';

import { IButtonProps } from '.';

const variants = {
  secondary: css`
    background: transparent;
    border: 0.1rem solid ${({ theme }) => theme.colors.secondary};
  `,
  transparent: css`
    background: transparent;
  `,
};

export const Container = styled.button<IButtonProps>`
  ${({ theme, variant, color, background }) => css`
    padding: 0.8rem 2.4rem;
    border-radius: 0.4rem;
    color: ${color || theme.colors.secondary};
    background: ${background || theme.colors.background};
    transition: ${theme.transition.default};

    * {
      transition: ${theme.transition.default};
    }

    ${variant && variants[variant]}

    :disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }
  `};
`;
