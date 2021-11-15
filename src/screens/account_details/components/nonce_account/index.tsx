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
    },
  };
  return (
    <>
      <Overview className={classes.overview} {...data.overview} />
    </>
  );
};

export default NonceAccount;
