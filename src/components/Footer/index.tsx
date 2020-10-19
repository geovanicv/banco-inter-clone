import React from 'react';

import { useTheme } from 'styled-components';

import { Container, FooterSection, Wrapper } from './styles';
import NortonSecured from '../../assets/images/illustrations/norton-secured.svg';

const containerAnimation = {
  unMounted: { opacity: 0 },
  mounted: {
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
};

const Footer: React.FC = () => {
  const { colors } = useTheme();

  return (
    <Container
      variants={containerAnimation}
      initial="unMounted"
      animate="mounted"
      exit="unMounted"
    >
      <FooterSection as="section">
        <Wrapper>
          <div>
            <h4>Fale conosco</h4>
            <span>
              Ligue 3003 4070 (Regiões Metropolitanas) ou 0800 940 0007 (Demais
              Regiões) | Horário de Atendimento: 08:00h às 20:00h.
            </span>
          </div>
          <span>® Todos os direitos reservados</span>
        </Wrapper>
      </FooterSection>
      <FooterSection as="section" background={colors.background}>
        <Wrapper>
          <div>
            <span>
              <strong>
                Para reclamações, sugestões ou cancelamento de produtos e
                serviços:
              </strong>
            </span>
            <span>Central de Relacionamento: 3003 4070 / 0800 940 0007</span>
            <span>Deficiente de Fala e Audição: 0800 979 7099</span>
          </div>
          <img
            src={NortonSecured}
            alt="Este é somente um layout, selo meramente ilustrativo."
          />
        </Wrapper>
      </FooterSection>
    </Container>
  );
};

export default Footer;
