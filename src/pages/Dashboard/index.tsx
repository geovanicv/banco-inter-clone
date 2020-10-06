import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import MainContent from './MainContent';
import SideBar from './SideBar';
import { Container, Wrapper } from './styles';

const animation = {
  unMounted: { opacity: 0 },
  mounted: {
    opacity: 1,
    // transition: {
    //   when: 'beforeChildren',
    //   staggerChildren: 0.2,
    // },
  },
};

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Wrapper
          variants={animation}
          initial="unMounted"
          animate="mounted"
          transition={{ duration: 1 }}
        >
          <SideBar />
          <MainContent />
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default Dashboard;
