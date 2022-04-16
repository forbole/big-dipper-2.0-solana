import { useState } from 'react';
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
    inflation: {
      validator: number,
      foundation: number,
      total: number,
      epoch: number,
    };
    inflationGovernor: {
      initial: number,
      terminal: number,
      taper: number,
      foundation: number,
      foundationTerm: number,
    };
    epochSchedule: {
      slotsPerEpoch: number,
      leaderScheduleSlotOffset: number,
      warmup: boolean,
      firstNormalEpoch: number,
      firstNormalSlot: number,
    }
  }>({
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

  // ====================================
  // inflation rate
  // ====================================
  useInflationRateQuery({
    onCompleted: (data) => {
      setState((prevState) => ({
        ...prevState,
        inflation: formatInflationRate(data),
      }));
    },
  });

  const formatInflationRate = (data: InflationRateQuery) => {
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
  useInflationGovernorQuery({
    onCompleted: (data) => {
      setState((prevState) => ({
        ...prevState,
        inflationGovernor: formatInflationGovernor(data),
      }));
    },
  });

  const formatInflationGovernor = (data: InflationGovernorQuery) => {
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
  useEpochScheduleQuery({
    onCompleted: (data) => {
      setState((prevState) => ({
        ...prevState,
        epochSchedule: formatEpochSchedule(data),
      }));
    },
  });

  const formatEpochSchedule = (data: EpochScheduleQuery) => {
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
