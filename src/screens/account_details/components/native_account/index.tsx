import React from 'react';
import {
  LoadAndExist,
} from '@components';
import {
  Overview,
  Balance,
  Accounts,
} from './components';
import {
  Tokens,
  Transactions,
} from '..';
import { useNativeAccount } from './hooks';
import { useStyles } from './styles';

const NativeAccount = () => {
  const classes = useStyles();
  const { state } = useNativeAccount();
  const data = {
    tokens: {
      tokens: Array(14).fill({
        token: 'ETH',
        amount: 243530,
      }),
    },
  };

  return (
    <LoadAndExist
      loading={state.loading}
      exists={state.exists}
    >
      <Overview className={classes.overview} overview={state.overview} />
      <Balance className={classes.balance} balance={state.balance} />
      <Accounts className={classes.accounts} />
      <Tokens
        className={classes.tokens}
        {...data.tokens}
      />
      <Transactions
        className={classes.transactions}
        loadNextPage={() => null}
        data={[]}
        hasNextPage={false}
        isNextPageLoading={false}
      />
    </LoadAndExist>
  );
};

export default NativeAccount;
