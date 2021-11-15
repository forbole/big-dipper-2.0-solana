import React from 'react';
import { chainConfig } from '@configs';
import {
  Overview,
  Delegation,
  Accounts,
} from './components';
import { useStyles } from './styles';
import {
  Tokens,
  Transactions,
} from '..';

const StakeAccount = () => {
  const classes = useStyles();
  const data = {
    overview: {
      address: 'desmos1hfhkduejung7g29wv863x369rndf3hu5xj4g93',
      stakeAuthority: 'desmos1hfhkduejung7g29wv863x369rndf3hu5xj4g93',
      withdrawAuthority: 'desmos1hfhkduejung7g29wv863x369rndf3hu5xj4g93',
      validator: 'desmosvaloper1rzhewpmmdl72lhnxj6zmxr4v94f522s4hyz467',
      delegated: 234,
      rewards: 23435 - 234,
      balance: 23435,
      rentReserve: 3453,
    },
    delegation: {
      activated: {
        value: 15000,
        denom: chainConfig.tokenUnits[chainConfig.primaryTokenUnit].display,
        format: '0,0.[000000]',
      },
      activating: {
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
      <Delegation className={classes.delegation} {...data.delegation} />
      <Accounts />
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

export default StakeAccount;
