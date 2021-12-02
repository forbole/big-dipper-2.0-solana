import { useState } from 'react';
import * as R from 'ramda';
import {
  useLatestBlockHeightListenerSubscription,
  // useAverageBlockTimeQuery,
  // AverageBlockTimeQuery,
  // useTokenPriceListenerSubscription,
  // TokenPriceListenerSubscription,
  // useActiveValidatorCountQuery,
  // ActiveValidatorCountQuery,
} from '@graphql/types';

export const useDataBlocks = () => {
  const [state, setState] = useState<{
    latestSlot: number;
    averageSlotTime: number;
    price: number;
    validators: {
      active: number;
      total: number;
    }
  }>({
    latestSlot: 0,
    averageSlotTime: 6.2,
    price: 5.66,
    validators: {
      active: 1000,
      total: 4200,
    },
  });

  // ====================================
  // block height
  // ====================================

  useLatestBlockHeightListenerSubscription({
    onSubscriptionData: (data) => {
      console.log(data, 'data');
      setState((prevState) => ({
        ...prevState,
        latestSlot: R.pathOr(0, ['height', 0, 'slot'], data.subscriptionData.data),
      }));
    },
  });

  return {
    state,
  };
};
