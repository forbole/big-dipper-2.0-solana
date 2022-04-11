import React from 'react';
import {
  Overview,
  Accounts,
} from './components';
import {
  Transactions,
} from '..';
import { useStyles } from './styles';

const VoteAccount = () => {
  const classes = useStyles();
  const data = {
    overview: {
      address: 'desmos1hfhkduejung7g29wv863x369rndf3hu5xj4g93',
      balance: '321321',
      authorizedVoter: 'desmos1hfhkduejung7g29wv863x369rndf3hu5xj4g93',
      authorizedWithdrawer: 'desmos1hfhkduejung7g29wv863x369rndf3hu5xj4g93',
      lastTimestamp: '2021-09-13T20:06:17.363145',
      commission: 10,
      rootSlot: 65445,
    },
    accounts: {
      vote: Array(15).fill('desmos1rzhewpmmdl72lhnxj6zmxr4v94f522s4ff2psv'),
    },
  };

  return (
    <>
      <Overview className={classes.overview} {...data.overview} />
      <Accounts
        className={classes.accounts}
        addresses={data.accounts.vote}
      />
      <Transactions className={classes.transactions} />
    </>
  );
};

export default VoteAccount;
