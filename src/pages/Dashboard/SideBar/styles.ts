import styled, { css } from 'styled-components';
import Button from '../../../components/Button';

export const Container = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.background};
    max-width: 26.4rem;
    max-height: 60rem;
    width: 100%;
    height: 100%;
    border-radius: ${theme.radius.default};
    box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.08);
    padding: 2.4rem;
  `}
`;

export const AmountInvested = styled(Button)`
  && {
    ${({ theme }) => css`
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin: 0.8rem 0;
      font-size: ${theme.fontSizes.small};
      color: ${theme.colors.lightGrey};
      background: ${`linear-gradient(90deg, ${theme.colors.primary} 0%, ${theme.colors.primary} 100%);`};
    `}
  }
`;