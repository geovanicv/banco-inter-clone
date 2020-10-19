import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 3.2rem;
  position: relative;
  background-color: red;
`;
