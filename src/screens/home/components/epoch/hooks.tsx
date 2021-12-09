import { useState } from 'react';
import * as R from 'ramda';
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
    epochTime: string;
  }>({
    epochRate: '0',
    epochNumber: '0',
    epochTime: '0',
  });

  useEpochQuery({
    onCompleted: (data) => {
      setState(formatEpoch(data));
    },
  });

  const formatEpoch = (data: EpochQuery) => {
    const results = { ...state };
    console.log('results', results);
    console.log('state', state);
    console.log('data', data);

    const slotsPerEpoch = 432000;
    const averageSlotTime = R.pathOr(0, ['average_slot_time_per_hour', 0, 'average_time'], data);
    const slot = R.pathOr(0, ['block', 0, 'slot'], data);

    const epochNumber = slot / slotsPerEpoch;
    results.epochNumber = formatNumber(Big(epochNumber).toPrecision(), 0);

    console.log('toFixed = none', formatNumber(Big(epochNumber).toPrecision()));
    console.log('toFixed = 0', formatNumber(Big(epochNumber).toPrecision(), 0));
    console.log('toFixed = 1', formatNumber(Big(epochNumber).toPrecision(), 1));
    console.log('toFixed = 2', formatNumber(Big(epochNumber).toPrecision(), 2));

    const epochRate = (slotsPerEpoch - (slot % slotsPerEpoch)) / slotsPerEpoch;
    results.epochRate = formatNumber(Big(epochRate).times(100).toPrecision(), 0);

    const epochTimeRaw = (slotsPerEpoch - (slot % slotsPerEpoch)) * averageSlotTime;
    const epochTimeHour = Math.floor(epochTimeRaw / (60 * 60));
    const epochTimeMinute = Math.floor((epochTimeRaw % (60 * 60)) / 60);
    const time = `${epochTimeHour}h ${epochTimeMinute}m`;
    results.epochTime = time;

    return results;
  };

  return {
    state,
  };
};
