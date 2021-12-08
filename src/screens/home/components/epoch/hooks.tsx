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

    console.log('data', data);

    const averageSlotTime = R.pathOr(0, ['average_slot_time_per_hour', 0, 'average_time'], data);
    const slot = R.pathOr(0, ['block', 0, 'slot'], data);

    const epochNumber = slot / 432000;
    results.epochNumber = formatNumber(Big(epochNumber).toPrecision(), 0);

    const epochRate = (432000 - (slot % 432000)) / 432000;
    results.epochRate = formatNumber(Big(epochRate).times(100).toPrecision(), 0);

    const epochTimeRaw = (432000 - (slot % 432000)) * averageSlotTime;
    const epochTimeParsing = numeral(epochTimeRaw).format('0,0');
    const epochTimeParsed = numeral(epochTimeParsing).value();

    const epochTimeHour = Math.floor(epochTimeParsed / (60 * 60));
    const epochTimeHourMinute = Math.floor((epochTimeParsed % (60 * 60)) / 60);
    const time = `${epochTimeHour}h ${epochTimeHourMinute}m`;
    results.epochTime = time;

    console.log('1 epoch = 432000 slots  =  ', 432000 * averageSlotTime, ' seconds = ', (432000 * averageSlotTime) / 3600, ' hours');
    console.log('averageSlotTime, slot, epochTimeParsed, epochTimeHourMinute =>', averageSlotTime, slot, epochTimeParsed, (epochTimeParsed % (60 * 60)) / 60);

    return results;
  };

  return {
    state,
  };
};
