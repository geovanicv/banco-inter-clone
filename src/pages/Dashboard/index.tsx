import React, { useContext } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import MainContent from './MainContent';
import SideBar from './SideBar';
import { Container, Wrapper } from './styles';
import { useAuth } from '../../hooks/auth';
import DefaultLayout from '../_layouts/default';

const animation = {
  unMounted: { opacity: 0 },
  mounted: {
    opacity: 1,
  },
};

const Dashboard: React.FC = () => {
  const { signIn, name } = useAuth();

  return (
    <DefaultLayout>
      <Container>
        <Wrapper
          variants={animation}
          initial="unMounted"
          animate="mounted"
          exit="unMounted"
          transition={{ duration: 1 }}
        >
          <SideBar />
          <MainContent />
        </Wrapper>
      </Container>
    </DefaultLayout>
  );
};

export default Dashboard;
