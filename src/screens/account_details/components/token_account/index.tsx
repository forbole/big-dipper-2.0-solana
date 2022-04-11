import React from 'react';
import {
  LoadAndExist,
} from '@components';
import {
  Overview,
  Market,
  Header,
  TopHolders,
} from './components';
import { Transactions } from '..';
import { useStyles } from './styles';
import { useTokenAccount } from './hooks';

const TokenAccount = () => {
  const classes = useStyles();
  const {
    state,
  } = useTokenAccount();
  return (
    <LoadAndExist
      loading={state.loading}
      exists={state.exists}
    >
      <div className={classes.root}>
        <Header className={classes.header} header={state.header} />
        <Overview
          className={classes.overview}
          overview={state.overview}
        />
        <Market
          className={classes.market}
          market={state.market}
        />
        {/* <Holders className={classes.holders} /> */}
        <TopHolders className={classes.holders} />
        <Transactions className={classes.transactions} />
      </div>
    </LoadAndExist>
  );
};

export default TokenAccount;
