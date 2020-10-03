import styled, { css } from 'styled-components';
import Button from '../../../components/Button';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: 26.4rem;
    display: flex;
    flex: 1 100%;
    flex-direction: column;
  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.background};
    max-height: 60rem;
    width: 100%;
    height: 100%;
    border-radius: ${theme.radius.default};
    box-shadow: ${theme.shadows.default};
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
