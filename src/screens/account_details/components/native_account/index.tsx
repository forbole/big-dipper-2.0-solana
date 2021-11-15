import React from 'react';
import { chainConfig } from '@configs';
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
    balance: {
      native: {
        value: 5000,
        denom: chainConfig.tokenUnits[chainConfig.primaryTokenUnit].display,
        format: '0,0.[000000]',
      },
      stake: {
        value: 5000,
        denom: chainConfig.tokenUnits[chainConfig.primaryTokenUnit].display,
        format: '0,0.[000000]',
      },
      nonce: {
        value: 5000,
        denom: chainConfig.tokenUnits[chainConfig.primaryTokenUnit].display,
        format: '0,0.[000000]',
      },
      vote: {
        value: 5000,
        denom: chainConfig.tokenUnits[chainConfig.primaryTokenUnit].display,
        format: '0,0.[000000]',
      },
      total: {
        value: 20000,
        denom: chainConfig.tokenUnits[chainConfig.primaryTokenUnit].display,
        format: '0,0.[000000]',
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
    <>
      <Overview className={classes.overview} {...data.overview} />
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
    </>
  );
};

export default NativeAccount;
