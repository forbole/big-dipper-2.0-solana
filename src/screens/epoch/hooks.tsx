import { useState } from 'react';
import * as R from 'ramda';
import numeral from 'numeral';
import { chainConfig } from '@configs';
import {
  useInflationRateQuery,
  InflationRateQuery,
  useInflationGovernorQuery,
  InflationGovernorQuery,
  useEpochScheduleQuery,
  EpochScheduleQuery,
} from '@graphql/types';

export const useEpoch = () => {
  const [state, setState] = useState<{
    latestSlot: number;
    averageSlotTime: number;
    price: number;
    formatInflation: {
      validator: number,
      foundation: number,
      total: number,
      epoch: number,
    }
  }>({
    latestSlot: 0,
    averageSlotTime: 0,
    price: 0,
    formatInflation: {
      validator: 0,
      foundation: 0,
      total: 0,
      epoch: 0,
    },
  });

  // ====================================
  // inflation rate
  // ====================================
  useInflationRateQuery({
    onCompleted: (data) => {
      setState((prevState) => ({
        ...prevState,
        formatInflation: formatInflationRate(data),
      }));
    },
  });

  const formatInflationRate = (data: InflationRateQuery) => {
    return {
      validator: data.ActionsInflationRate.validator,
      foundation: data.ActionsInflationRate.foundation,
      total: data.ActionsInflationRate.total,
      epoch: data.ActionsInflationRate.epoch,
    };
  };

  console.log('state', state);

  return {
    state,
  };
};
