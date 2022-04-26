import { useState } from 'react';
import {
  useEpochDetailsQuery,
  EpochDetailsQuery,
} from '@graphql/types';
import {
  InflationType,
  InflationGovernorType,
  EpochScheduleType,
} from './types';

export const useEpoch = () => {
  const [state, setState] = useState<{
    exists: boolean,
    loading: boolean,
    inflation: InflationType;
    inflationGovernor: InflationGovernorType;
    epochSchedule: EpochScheduleType;
  }>({
    exists: true,
    loading: false,
    inflation: {
      validator: 0,
      foundation: 0,
      total: 0,
      epoch: 0,
    },
    inflationGovernor: {
      initial: 0,
      terminal: 0,
      taper: 0,
      foundation: 0,
      foundationTerm: 0,
    },
    epochSchedule: {
      slotsPerEpoch: 0,
      leaderScheduleSlotOffset: 0,
      warmup: false,
      firstNormalEpoch: 0,
      firstNormalSlot: 0,
    },
  });

  useEpochDetailsQuery({
    onCompleted: (data) => {
      setState((prevState) => ({
        ...prevState,
        inflation: formatInflationRate(data),
        inflationGovernor: formatInflationGovernor(data),
        epochSchedule: formatEpochSchedule(data),
      }));
    },
  });

  // ====================================
  // inflation rate
  // ====================================
  const formatInflationRate = (data: EpochDetailsQuery) => {
    return {
      validator: data.inflationRate.validator,
      foundation: data.inflationRate.foundation,
      total: data.inflationRate.total,
      epoch: data.inflationRate.epoch,
    };
  };

  // ====================================
  // inflation governor
  // ====================================
  const formatInflationGovernor = (data: EpochDetailsQuery) => {
    return {
      initial: data.inflationGovernor.initial,
      terminal: data.inflationGovernor.terminal,
      taper: data.inflationGovernor.taper,
      foundation: data.inflationGovernor.foundation,
      foundationTerm: data.inflationGovernor.foundationTerm,
    };
  };

  // ====================================
  // epoch schedule
  // ====================================
  const formatEpochSchedule = (data: EpochDetailsQuery) => {
    return {
      slotsPerEpoch: data.epochSchedule.slotsPerEpoch,
      leaderScheduleSlotOffset: data.epochSchedule.leaderScheduleSlotOffset,
      warmup: data.epochSchedule.warmup,
      firstNormalEpoch: data.epochSchedule.firstNormalEpoch,
      firstNormalSlot: data.epochSchedule.firstNormalSlot,
    };
  };

  return {
    state,
  };
};
