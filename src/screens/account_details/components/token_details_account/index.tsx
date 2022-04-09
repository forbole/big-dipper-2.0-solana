import React from 'react';
import {
  Overview,
  Accounts,
} from './components';
import {
  Tokens,
  Transactions,
} from '..';
import { useStyles } from './styles';

const TokenAccount = () => {
  const classes = useStyles();
  const data = {
    overview: {
      address: 'desmos1hfhkduejung7g29wv863x369rndf3hu5xj4g93',
      mint: 'desmos1hfhkduejung7g29wv863x369rndf3hu5xj4g93',
      balance: '321321',
      authority: 'desmos1hfhkduejung7g29wv863x369rndf3hu5xj4g93',
    },
    accounts: {
      token: Array(15).fill('desmos1rzhewpmmdl72lhnxj6zmxr4v94f522s4ff2psv'),
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
      <Accounts
        className={classes.accounts}
        addresses={data.accounts.token}
      />
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

export default TokenAccount;
