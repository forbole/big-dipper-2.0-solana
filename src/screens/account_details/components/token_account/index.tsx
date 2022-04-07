import React from 'react';
import {
  LoadAndExist,
} from '@components';
import {
  Overview,
  Market,
  Header,
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
      <Header className={classes.header} header={state.header} />
      {/* <Overview
          className={classes.overview}
          {...state.overview}
        /> */}
      {/* <Market
          className={classes.market}
          {...state.market}
        /> */}
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
    </LoadAndExist>
  );
};

export default TokenAccount;
