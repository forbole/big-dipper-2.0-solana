import { useState } from 'react';
import * as R from 'ramda';
import {
  useBlocksListenerSubscription,
  useBlocksQuery,
  BlocksListenerSubscription,
} from '@graphql/types';
import {
  BlocksState, BlockType,
} from './types';

export const useBlocks = () => {
  const [state, setState] = useState<BlocksState>({
    loading: true,
    exists: true,
    hasNextPage: false,
    isNextPageLoading: false,
    items: [],
  });

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  // This is a bandaid as it can get extremely
  // expensive if there is too much data
  /**
   * Helps remove any possible duplication
   * and sorts by height in case it bugs out
   */
  const uniqueAndSort = R.pipe(
    R.uniqBy(R.prop('hash')),
    R.sort(R.descend(R.prop('height'))),
  );

  // ================================
  // block subscription
  // ================================
  useBlocksListenerSubscription({
    variables: {
      limit: 1,
      offset: 0,
    },
    onSubscriptionData: (data) => {
      handleSetState({
        loading: false,
        items: [
          ...formatBlocks(data.subscriptionData.data),
          ...state.items,
        ],
      });
    },
  });

  // ================================
  // block query
  // ================================
  const LIMIT = 51;
  const blockQuery = useBlocksQuery({
    variables: {
      limit: LIMIT,
      offset: 1,
    },
    onError: () => {
      handleSetState({
        loading: false,
      });
    },
    onCompleted: (data) => {
      const itemsLength = data.blocks.length;
      const newItems = uniqueAndSort([
        ...state.items,
        ...formatBlocks(data),
      ]);
      handleSetState({
        loading: false,
        items: newItems,
        hasNextPage: itemsLength === 51,
        isNextPageLoading: false,
      });
    },
  });

  const loadNextPage = async () => {
    handleSetState({
      isNextPageLoading: true,
    });
    // refetch query
    await blockQuery.fetchMore({
      variables: {
        offset: state.items.length,
        limit: LIMIT,
      },
    }).then(({ data }) => {
      const itemsLength = data.blocks.length;
      const newItems = uniqueAndSort([
        ...state.items,
        ...formatBlocks(data),
      ]);
      // set new state
      handleSetState({
        items: newItems,
        isNextPageLoading: false,
        hasNextPage: itemsLength === 51,
      });
    });
  };

  const formatBlocks = (data: BlocksListenerSubscription): BlockType[] => {
    return data.blocks.map((x) => {
      return ({
        slot: x.slot,
        txs: x.numTxs,
        hash: x.hash,
        timestamp: x.timestamp,
        leader: R.pathOr('', ['validator', 0, 'address'], x),
      });
    });
  };

  return {
    state,
    loadNextPage,
  };
};
