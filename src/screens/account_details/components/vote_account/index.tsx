import React from 'react';
import {
  Overview,
} from './components';
import {
  Transactions,
} from '..';
import { useStyles } from './styles';
import { useVoteAccount } from './hooks';

const VoteAccount = () => {
  const classes = useStyles();
  const { state } = useVoteAccount();

  return (
    <>
      <Overview className={classes.overview} overview={state.overview} />
      <Transactions className={classes.transactions} />
    </>
  );
};

export default VoteAccount;
