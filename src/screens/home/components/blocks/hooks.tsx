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
        leader: {
          name: x.leader[0]?.validatorConfig?.name,
          url: x.leader[0]?.validatorConfig?.avatarUrl,
          address: x.leader[0]?.address,
        },
      });
    });
  };

  return {
    state,
  };
};
