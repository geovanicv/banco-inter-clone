import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  background: ${({ theme }) => theme.colors.background};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  max-width: 113rem;
  height: 10.4rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const LeftNav = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.large};
  display: flex;
  align-items: center;
  font-weight: bold;

  > svg {
    margin-right: 2.4rem;
    margin: 0 2.4rem 1.1rem 0;
  }
`;

export const RightNav = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
`;
