import { useState } from 'react';
import * as R from 'ramda';
import { POLLING_INTERVAL } from '@utils/constants';
import { useInterval } from '@hooks';
import {
  useBlocksQuery,
  BlocksQuery,
  useLatestBlockHeightQuery,
} from '@graphql/types';
import {
  BlocksState, BlockType,
} from './types';

export const PAGE_SIZE = 25;

export const useBlocks = () => {
  const [state, setState] = useState<BlocksState>({
    page: 0,
    loading: true,
    items: [],
    total: 0,
  });

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  const handlePageChangeCallback = async (page: number, _rowsPerPage: number) => {
    handleSetState({
      page,
      loading: true,
    });
    await getBlocksByPage(page);
  };

  useLatestBlockHeightQuery({
    onCompleted: (data) => {
      handleSetState({
        total: data.height[0].slot,
      });
    },
  });

  const blockQuery = useBlocksQuery({
    variables: {
      offset: 0,
      limit: PAGE_SIZE,
    },
    onCompleted: (data) => {
      handleSetState({
        items: formatBlocks(data),
        page: 0,
        loading: false,
      });
    },
  });

  const getBlocksByPage = async (page: number) => {
    await blockQuery.fetchMore({
      variables: {
        offset: page * PAGE_SIZE,
        limit: PAGE_SIZE,
      },
    }).then(({ data }) => {
      handleSetState({
        items: formatBlocks(data),
        loading: false,
        page,
      });
    });
  };

  const formatBlocks = (data: BlocksQuery): BlockType[] => {
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

  const getBlocksInterval = async () => {
    if (state.page === 0) {
      await getBlocksByPage(0);
    }
  };

  useInterval(getBlocksInterval, POLLING_INTERVAL);

  return ({
    state,
    handlePageChangeCallback,
  });
};
