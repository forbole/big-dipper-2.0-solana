import React from 'react';
import {
  Overview,
  Balance,
  Accounts,
} from './components';
import {
  Tokens,
  Transactions,
} from '..';
import { useStyles } from './styles';

const NativeAccount = () => {
  const classes = useStyles();
  const data = {
    overview: {
      address: 'desmos1hfhkduejung7g29wv863x369rndf3hu5xj4g93',
    },
  };

  return (
    <>
      <Overview className={classes.overview} {...data.overview} />
      <Balance className={classes.balance} />
      <Accounts className={classes.accounts} />
      <Tokens className={classes.tokens} />
      <Transactions className={classes.transactions} />
    </>
  );
};

export default NativeAccount;
