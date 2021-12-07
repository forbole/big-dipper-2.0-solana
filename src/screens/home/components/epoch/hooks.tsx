import { useState } from 'react';
import * as R from 'ramda';
import numeral from 'numeral';
import {
  useEpochQuery,
  EpochQuery,
} from '@graphql/types';
import Big from 'big.js';
import { formatNumber } from '@utils/format_token';

export const useEpoch = () => {
  const [state, setState] = useState<{
    epochRate: string;
    epochNumber: string;
    epochTime: number;
  }>({
    epochRate: '0',
    epochNumber: '0',
    epochTime: 0,
  });

  useEpochQuery({
    onCompleted: (data) => {
      setState(formatEpoch(data));
    },
  });

  const formatEpoch = (data: EpochQuery) => {
    const results = { ...state };

    console.log('data', data);

    const averageSlotTime = R.pathOr(0, ['average_slot_time_per_hour', 0, 'average_time'], data);
    const slot = R.pathOr(0, ['block', 0, 'slot'], data);

    const epochNumber = slot / 432000;
    results.epochNumber = formatNumber(Big(epochNumber).toPrecision(), 0);

    const epochTime = 432000 - (slot % 432000) * averageSlotTime;
    results.epochTime = numeral(epochTime).value();

    const epochRate = (432000 - (slot % 432000)) / 432000;
    results.epochRate = formatNumber(Big(epochRate).times(100).toPrecision(), 2);

    console.log('slot % 432000', slot % 432000);

    return results;
  };

  return {
    state,
  };
};
