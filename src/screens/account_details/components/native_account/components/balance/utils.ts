import numeral from 'numeral';
import { BalanceType } from './types';

export const formatBalanceData = (data: BalanceType) => {
  const balanceChart = [
    {
      key: 'balanceNative',
      display: `${numeral(data.native.value).format(data.native.format)} ${data.native.denom.toUpperCase()}`,
      value: data.native.value,
    },
    {
      key: 'balanceStake',
      display: `${numeral(data.stake.value).format(data.stake.format)} ${data.stake.denom.toUpperCase()}`,
      value: data.stake.value,
    },
    {
      key: 'balanceNonce',
      display: `${numeral(data.nonce.value).format(data.nonce.format)} ${data.nonce.denom.toUpperCase()}`,
      value: data.nonce.value,
    },
    {
      key: 'balanceVote',
      display: `${numeral(data.vote.value).format(data.vote.format)} ${data.vote.denom.toUpperCase()}`,
      value: data.vote.value,
    },
  ];

  return balanceChart;
};
