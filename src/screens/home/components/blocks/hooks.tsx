import { useState } from 'react';
import * as R from 'ramda';
import {
  useBlocksListenerSubscription,
  BlocksListenerSubscription,
} from '@graphql/types';
import {
  BlocksState,
} from './types';

export const useBlocks = () => {
  const [state, setState] = useState<BlocksState>({
    items: [],
  });

  // ================================
  // block subscription
  // ================================
  useBlocksListenerSubscription({
    onSubscriptionData: (data) => {
      handleSetState({
        items: formatBlocks(data.subscriptionData.data),
      });
    },
  });

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  const formatBlocks = (data: BlocksListenerSubscription) => {
    return data.blocks.map((x) => {
      const txCounter = R.pathOr('', ['transactionsAggregate', 'aggregate', 'count'], x);
      return ({
        slot: x.slot,
        txs: txCounter,
        hash: x.hash,
        timestamp: x.timestamp,
        proposer: x.proposer,
      });
    });
  };

  return {
    state,
  };
};
