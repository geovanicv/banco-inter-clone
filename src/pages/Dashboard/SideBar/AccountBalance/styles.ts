import styled, { css } from 'styled-components';
import { Container as Button } from '../../../../components/Button/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.lightGrey};
    width: 100%;
    height: 7.2rem;
    padding: 1.6rem 0 1.6rem 1.6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: ${theme.radius.small};

    svg {
      stroke-width: 2;
    }

    ${Button} {
      &:hover {
        svg {
          transform: scale(1.05);
        }
      }
    }
  `}
`;

export const Balance = styled.div`
  ${({ theme }) => css`
    flex: 1;
    > span {
      font-size: ${theme.fontSizes.small};
      display: block;
      margin: 0.2rem 0;

      :last-child {
        height: 2.2rem;
        background: ${theme.colors.grey}b3;
        border-radius: ${theme.radius.small};
      }
    }

    > strong {
      color: ${theme.colors.darkGrey};
    }
  `}
`;
