import React from 'react';
import { Layout } from '@components';
import { useStyles } from './styles';
import {
  DataBlocks,
  ActiveStake,
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
      {/* <OnlineVotingPower className={classes.onlineVotingPower} /> */}
      {/* <Tokenomics className={classes.tokenomics} /> */}
      {/* <Consensus className={classes.consensus} /> */}
      {/* <Blocks className={classes.blocks} /> */}
      {/* <Transactions className={classes.transactions} /> */}
    </Layout>
  );
};

export default Home;
