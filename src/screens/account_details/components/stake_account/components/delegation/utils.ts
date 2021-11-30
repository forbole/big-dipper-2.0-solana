import numeral from 'numeral';
import { DelegationType } from './types';

export const formatBalanceData = (data: DelegationType) => {
  const balanceChart = [
    {
      key: 'balanceActivated',
      display: `${numeral(data.activated.value).format(data.activated.format)} ${data.activated.denom.toUpperCase()}`,
      value: data.activated.value,
    },
    {
      key: 'balanceActivating',
      display: `${numeral(data.activating.value).format(data.activating.format)} ${data.activating.denom.toUpperCase()}`,
      value: data.activating.value,
    },
  ];

  return balanceChart;
};
