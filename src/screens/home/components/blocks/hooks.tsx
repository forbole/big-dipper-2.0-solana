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
      return ({
        slot: x.slot,
        txs: x.numTxs,
        hash: x.hash,
        timestamp: x.timestamp,
        proposer: x.proposer,
        leader: {
          name: R.pathOr(null, ['name', 'validator_config', 0], x.leader),
          url: R.pathOr(null, ['avatarUrl', 'validator_config', 0], x.leader),
          address: x.leader[0].address,
        },
      });
    });
  };

  return {
    state,
  };
};
