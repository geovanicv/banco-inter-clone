import styled, { css } from 'styled-components';
import { transparentize } from 'polished';
import { motion } from 'framer-motion';

import { Wrapper as HeaderWrapper } from '../Header/styles';

export const Container = styled(motion.footer)`
  ${() => css`
    margin-top: 3.4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    transform-origin: bottom;
  `}
`;

export const Wrapper = styled(HeaderWrapper)`
  ${({ theme }) => css`
    height: auto;
    padding: 1.6rem 0;
    align-items: center;
    h4 {
      color: ${theme.colors.secondary};
      font-size: ${theme.fontSizes.default};
    }
    span {
      display: block;
      font-size: ${theme.fontSizes.small};
      :first-of-type {
        margin-bottom: 0.8rem;
      }
    }
    > img {
      margin-top: 1.6rem;
    }
  `}
`;

export const FooterSection = styled(Container)<{ background?: string }>`
  ${({ theme, background }) => css`
    margin-top: 0;

    background: ${background || transparentize(0.92, theme.colors.grey)};
    :last-of-type {
      ${Wrapper} {
        padding: 2.4rem 0;
      }
    }
  `}
`;
