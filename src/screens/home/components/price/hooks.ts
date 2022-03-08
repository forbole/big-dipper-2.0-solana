import { useState } from 'react';
import numeral from 'numeral';
import * as R from 'ramda';
import { chainConfig } from '@configs';
import {
  useTokenPriceHistoryQuery,
  TokenPriceHistoryQuery,
} from '@graphql/types';
import { PriceState } from './types';

export const usePrice = () => {
  const [state, setState] = useState<PriceState>({
    items: [],
  });

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  useTokenPriceHistoryQuery({
    variables: {
      denom: chainConfig.primaryTokenUnit,
    },
    onCompleted: (data) => {
      handleSetState({
        items: formatTokenPriceHistory(data),
      });
    },
  });

  const formatTokenPriceHistory = (data: TokenPriceHistoryQuery) => {
    return data.tokenPrice.map((x) => {
      return ({
        time: x.timestamp,
        value: x.price,
      });
    });
  };

  const tickPriceFormatter = (num: number) => {
    return `$${numeral(num).format('0,0')}`;
  };

  return {
    state,
    tickPriceFormatter,
  };
};
