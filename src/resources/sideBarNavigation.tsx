import React from 'react';

import {
  FiUmbrella,
  FiBarChart2,
  FiSmartphone,
  FiDollarSign,
  FiPieChart,
  FiShield,
} from 'react-icons/fi';

export default {
  'Conta Digital': {
    icon: <FiSmartphone />,
  },
  Crédito: {
    icon: <FiDollarSign />,
  },
  Investimentos: {
    icon: <FiBarChart2 />,
  },
  IDTVM: {
    icon: <FiPieChart />,
  },
  Seguros: {
    icon: <FiUmbrella />,
  },
  'Recarga de Celular': {
    icon: <FiSmartphone />,
  },
  'Sua segurança': {
    icon: <FiShield />,
  },
} as const;
