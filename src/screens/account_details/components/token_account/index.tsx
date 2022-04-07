import React from 'react';
import {
  LoadAndExist,
} from '@components';
import {
  Overview,
  Market,
  // Transactions,
  // Holders,
} from './components';
import { useStyles } from './styles';
import { useTokenAccount } from './hooks';

const TokenAccount = () => {
  const classes = useStyles();
  const {
    state,
    // loadNextPageTx,
    // loadNextPageHolders,
  } = useTokenAccount();

  return (
    <LoadAndExist
      loading={state.loading}
      exists={state.exists}
    >
      <span className={classes.root}>
        <Overview
          className={classes.overview}
          {...state.overview}
        />
        <Market
          className={classes.market}
          {...state.market}
        />
        {/* <Holders
          className={classes.holders}
          loadNextPage={loadNextPageHolders}
          data={state.holders.data}
          hasNextPage={state.transactions.hasNextPage}
          isNextPageLoading={state.transactions.isNextPageLoading}
        /> */}
        {/* <Transactions
          className={classes.transactions}
          loadNextPage={loadNextPageTx}
          data={state.transactions.data}
          hasNextPage={state.transactions.hasNextPage}
          isNextPageLoading={state.transactions.isNextPageLoading}
        /> */}
      </span>
    </LoadAndExist>
  );
};

export default TokenAccount;
