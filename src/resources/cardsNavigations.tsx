import React from 'react';

import {
  FiBarChart2,
  FiCreditCard,
  FiGift,
  FiUmbrella,
  FiRepeat,
} from 'react-icons/fi';

import { HashCodeICon } from '../assets/images/icons/index';

export default {
  Transferência: {
    icon: <FiRepeat />,
  },
  Pagamentos: {
    icon: <HashCodeICon />,
  },
  Investimentos: {
    icon: <FiBarChart2 />,
  },
  Cartões: {
    icon: <FiCreditCard />,
  },
  'Gift Card': {
    icon: <FiGift />,
  },
  Seguros: {
    icon: <FiUmbrella />,
  },
} as const;
