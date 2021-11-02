import React from 'react';
import { Layout } from '@components';
import { useStyles } from './styles';
import {
  DataBlocks,
  ActiveStake,
  Epoch,
  StakeWeight,
  OnlineVotingPower,
  Consensus,
  Tokenomics,
  Blocks,
  Transactions,
} from './components';

const Home = () => {
  const classes = useStyles();

  return (
    <Layout className={classes.root}>
      <DataBlocks className={classes.dataBlocks} />
      <ActiveStake className={classes.activeStake} />
      <Epoch className={classes.epoch} />
      <StakeWeight className={classes.stakeWeight} />
      <Blocks className={classes.blocks} />
      {/* <Transactions className={classes.transactions} /> */}
    </Layout>
  );
};

export default Home;
