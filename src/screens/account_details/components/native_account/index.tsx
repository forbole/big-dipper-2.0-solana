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
    overview: {
      address: 'desmos1hfhkduejung7g29wv863x369rndf3hu5xj4g93',
    },
    balance: {
      native: {
        value: '5000',
        baseDenom: 'sol',
        displayDenom: 'sol',
        exponent: 6,
      },
      stake: {
        value: '5000',
        baseDenom: 'sol',
        displayDenom: 'sol',
        exponent: 6,
      },
      nonce: {
        value: '5000',
        baseDenom: 'sol',
        displayDenom: 'sol',
        exponent: 6,
      },
      vote: {
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
    accounts: {
      stake: Array(15).fill('desmos1rzhewpmmdl72lhnxj6zmxr4v94f522s4ff2psv'),
      vote: Array(3).fill('desmos1rzhewpmmdl72lhnxj6zmxr4v94f522s4ff2psv'),
      nonce: Array(100).fill('desmos1rzhewpmmdl72lhnxj6zmxr4v94f522s4ff2psv'),
      token: Array(10).fill('desmos1rzhewpmmdl72lhnxj6zmxr4v94f522s4ff2psv'),
    },
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
      <Balance className={classes.balance} {...data.balance} />
      <Accounts className={classes.accounts} {...data.accounts} />
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
