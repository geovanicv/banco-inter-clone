import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.section)`
  ${() => css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
    grid-gap: 2.4rem;
    margin: 2.4rem 0;
  `}
`;

export const Card = styled(motion.article)`
  ${({ theme }) => css`
    background: ${theme.colors.background};
    max-width: 26.4rem;
    min-height: 17.6rem;
    width: 100%;
    border-radius: ${theme.radius.default};
    padding: 1.6rem 2.4rem;
    box-shadow: ${theme.shadows.flat};
    display: flex;
    flex-direction: column;
  `}
`;

export const Header = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-start;

    svg {
      margin-right: 0.8rem;
      stroke: ${theme.colors.primary};
    }

    > span {
      font-size: ${theme.fontSizes.small};
      color: ${theme.colors.darkGrey};
      font-weight: 500;
    }

    > button {
      margin-left: auto;
      padding: 0;
      svg {
        stroke: ${theme.colors.grey};
      }
    }
  `}
`;

export const DataWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: auto;
  flex: 1;
`;

export const LeftData = styled.div`
  margin-right: 0.8rem;
  max-width: 55%;
  max-height: 9.6rem;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  > img {
    height: 8.4rem;
    width: auto;
  }

  svg text {
    font-family: inherit !important;
    font-size: ${({ theme }) => theme.fontSizes.tiny} !important;
    fill: ${({ theme }) => theme.colors.grey} !important;
  }
`;

export const RightData = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.small};

    > span:not(:only-child):last-of-type {
      margin-top: 0.8rem;
      display: block;
    }
  `}
`;

export const DataValue = styled.div<{ green?: boolean; red?: boolean }>`
  ${({ theme, green, red }) => css`
    color: ${() => {
      if (green) {
        return theme.colors.success;
      }
      if (red) {
        return theme.colors.error;
      }

      return 'inherit';
    }};

    font-size: ${theme.fontSizes.default};
  `}
`;

export const CustomTooltip = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.lightGrey};
    padding: 0.4rem 0.8rem;
    border-radius: ${theme.radius.small};
    font-size: ${theme.fontSizes.tiny};
    text-align: center;
    box-shadow: 0 -0.1rem 0.2rem rgba(0, 0, 0, 0.28);
    :before {
      content: '';
      display: block;
      height: 0;
      left: 50%;
      bottom: -50%;
      position: absolute;
      transform: translate3d(-50%, 25%, 0);
      border-color: ${theme.colors.lightGrey} transparent transparent
        transparent;
      border-style: solid;
      border-width: 0.8rem;
    }
    :after {
      content: '';
      display: block;
    }
  `}
`;
