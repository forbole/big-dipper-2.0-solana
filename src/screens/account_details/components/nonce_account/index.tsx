import React from 'react';
import {
  Overview,
} from './components';
import { useStyles } from './styles';
import {
  Tokens,
  Transactions,
} from '..';
import { useNonceAccount } from './hooks';

const NonceAccount = () => {
  const classes = useStyles();
  const { state } = useNonceAccount();

  return (
    <>
      <Overview className={classes.overview} overview={state.overview} />
      <Tokens className={classes.tokens} />
      <Transactions className={classes.transactions} />
    </>
  );
};

export default NonceAccount;
