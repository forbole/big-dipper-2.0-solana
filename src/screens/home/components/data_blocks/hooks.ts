import { useState } from 'react';
import * as R from 'ramda';
import numeral from 'numeral';
import { chainConfig } from '@configs';
import {
  useLatestBlockHeightListenerSubscription,
  // useAverageBlockTimeQuery,
  // AverageBlockTimeQuery,
  useTokenPriceListenerSubscription,
  TokenPriceListenerSubscription,
  useActiveValidatorCountQuery,
  ActiveValidatorCountQuery,
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
    price: 0,
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
      setState((prevState) => ({
        ...prevState,
        latestSlot: R.pathOr(0, ['height', 0, 'slot'], data.subscriptionData.data),
      }));
    },
  });

  // ====================================
  // token price
  // ====================================
  useTokenPriceListenerSubscription({
    variables: {
      denom: chainConfig?.tokenUnits[chainConfig.primaryTokenUnit]?.display,
    },
    onSubscriptionData: (data) => {
      setState((prevState) => ({
        ...prevState,
        price: formatTokenPrice(data.subscriptionData.data),
      }));
    },
  });

  const formatTokenPrice = (data: TokenPriceListenerSubscription) => {
    if (data?.tokenPrice[0]?.price) {
      return numeral(numeral(data?.tokenPrice[0]?.price).format('0.[00]', Math.floor)).value();
    }
    return state.price;
  };

  // ====================================
  // validators
  // ====================================
  useActiveValidatorCountQuery({
    onCompleted: (data) => {
      setState((prevState) => ({
        ...prevState,
        validators: formatActiveValidatorsCount(data),
      }));
    },
  });

  const formatActiveValidatorsCount = (data: ActiveValidatorCountQuery) => {
    return {
      active: data.activeTotal.aggregate.count,
      total: data.total.aggregate.count,
    };
  };

  return {
    state,
  };
};
