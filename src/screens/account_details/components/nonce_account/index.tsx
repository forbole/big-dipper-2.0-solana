import React from 'react';
import {
  Overview,
} from './components';
import { useStyles } from './styles';
import {
  Tokens,
  Transactions,
} from '..';

const NonceAccount = () => {
  const classes = useStyles();
  const data = {
    overview: {
      address: 'desmos1hfhkduejung7g29wv863x369rndf3hu5xj4g93',
      authority: 'desmos1hfhkduejung7g29wv863x369rndf3hu5xj4g93',
      balance: 23435,
      blockhash: '9hZMP3JunShlriadsrvnsrlquqwt7suvspudasvimqai',
      fee: 3453,
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

export default NonceAccount;
