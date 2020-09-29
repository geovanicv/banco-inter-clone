import React from 'react';
import Header from '../../components/Header';
import MainContent from './MainContent';
import SideBar from './SideBar';
import { Container, Wrapper } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Wrapper>
          <SideBar />
          <MainContent />
        </Wrapper>
      </Container>
    </>
  );
};

export default Dashboard;
