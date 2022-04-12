import React from 'react';
import {
  Overview,
} from './components';
import {
  Transactions,
} from '..';
import { useStyles } from './styles';
import { useTokenDetailAccount } from './hooks';

const TokenAccount = () => {
  const classes = useStyles();
  const { state } = useTokenDetailAccount();

  return (
    <>
      <Overview className={classes.overview} overview={state.overview} />
      <Transactions className={classes.transactions} />
    </>
  );
};

export default TokenAccount;
