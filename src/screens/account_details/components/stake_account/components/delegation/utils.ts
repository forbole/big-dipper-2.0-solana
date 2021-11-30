import { formatNumber } from '@utils/format_token';
import { DelegationType } from './types';

export const formatBalanceData = (data: DelegationType) => {
  const balanceChart = [
    {
      key: 'balanceActivated',
      display: `${formatNumber(data.activated.value, data.activated.exponent)} ${data.activated.displayDenom.toUpperCase()}`,
      value: data.activated.value,
    },
    {
      key: 'balanceActivating',
      display: `${formatNumber(data.activating.value, data.activating.exponent)} ${data.activating.displayDenom.toUpperCase()}`,
      value: data.activating.value,
    },
  ];

  return balanceChart;
};
