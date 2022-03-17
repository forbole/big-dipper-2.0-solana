import {
  useEffect, useState,
} from 'react';
import * as R from 'ramda';
import axios from 'axios';
import { POLLING_INTERVAL } from '@utils/constants';
import { useInterval } from '@hooks';
import { BlocksState } from './types';

export const PAGE_SIZE = 25;

export const useBlocks = () => {
  const [state, setState] = useState<BlocksState>({
    page: 0,
    loading: true,
    items: [],
    total: 0,
  });

  useEffect(() => {
    getLatestBlockHeight();
  }, []);

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

  const getLatestBlockHeight = async () => {
    try {
      const { data: total } = await axios.get(LATEST_BLOCK_HEIGHT);
      handleSetState({
        total,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const getBlocksByPage = async (page: number) => {
    try {
      const { data: blocksData } = await axios.get(BLOCKS, {
        params: {
          from: page * PAGE_SIZE,
          size: PAGE_SIZE,
        },
      });

      const items = blocksData.map((x) => {
        return ({
          block: x.round,
          timestamp: x.timestamp,
          hash: x.hash,
          txs: x.txCount,
          shard: x.shard,
          size: x.sizeTxs,
        });
      });

      handleSetState({
        loading: false,
        items,
      });
    } catch (error) {
      console.log(error.message);
    }
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
