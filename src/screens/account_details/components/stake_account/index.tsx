import React from 'react';
import {
  Overview,
  Delegation,
} from './components';
import { useStyles } from './styles';
import {
  Tokens,
  Transactions,
} from '..';
import { useTokenDetailAccount } from './hooks';

const StakeAccount = () => {
  const classes = useStyles();
  const { state } = useTokenDetailAccount();
  const data = {
    delegation: {
      activated: {
        value: '15000',
        baseDenom: 'sol',
        displayDenom: 'sol',
        exponent: 6,
      },
      activating: {
        value: '5000',
        baseDenom: 'sol',
        displayDenom: 'sol',
        exponent: 6,
      },
      total: {
        value: '20000',
        baseDenom: 'sol',
        displayDenom: 'sol',
        exponent: 6,
      },
    },
    tokens: {
      tokens: Array(14).fill({
        token: 'ETH',
        amount: 243530,
      }),
    },
  };
  return (
    <>
      <Overview className={classes.overview} overview={state.overview} />
      <Delegation className={classes.delegation} {...data.delegation} />
      <Tokens
        className={classes.tokens}
        {...data.tokens}
      />
      <Transactions className={classes.transactions} />
    </>
  );
};

export default StakeAccount;
