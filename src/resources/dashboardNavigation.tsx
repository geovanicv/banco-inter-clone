import React from 'react';

import {
  UmbrellaIcon,
  BarChartIcon,
  BarSmartphoneIcon,
  DollarIcon,
  PieIcon,
  ShieldIcon,
} from '../assets/images/icons';

export default {
  'Conta Digital': {
    icon: <BarSmartphoneIcon />,
  },
  Crédito: {
    icon: <DollarIcon />,
  },
  Investimentos: {
    icon: <BarChartIcon />,
  },
  IDTVM: {
    icon: <PieIcon />,
  },
  Seguros: {
    icon: <UmbrellaIcon />,
  },
  'Recarga de Celular': {
    icon: <BarSmartphoneIcon />,
  },
  'Sua segurança': {
    icon: <ShieldIcon />,
  },
} as const;
