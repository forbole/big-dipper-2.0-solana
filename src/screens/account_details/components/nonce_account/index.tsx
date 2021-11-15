import React from 'react';
import {
  Overview,
} from './components';
import { useStyles } from './styles';

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
  };
  return (
    <>
      <Overview className={classes.overview} {...data.overview} />
    </>
  );
};

export default NonceAccount;
