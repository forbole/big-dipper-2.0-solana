import React from 'react';
import {
  Overview,
  Balance,
  Accounts,
  Tokens,
  Transactions,
} from './components';
import { useStyles } from './styles';

const NativeAccount = () => {
  const classes = useStyles();

  return (
    <>
      <Overview className={classes.overview} />
      <Balance className={classes.balance} />
      <Accounts className={classes.accounts} />
      <Tokens className={classes.tokens} />
      <Transactions className={classes.transactions} />
    </>
  );
};

export default NativeAccount;
