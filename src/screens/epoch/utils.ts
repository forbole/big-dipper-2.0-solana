import numeral from 'numeral';
import {
  InflationType,
  InflationGovernorType,
  EpochScheduleType,
} from './types';

export const inflationData = (data: InflationType, t: any) => {
  return ([
    {
      name: t('epoch'),
      value: data.epoch,
      detail: t('epochDetail'),
    },
    {
      name: t('totalInflation'),
      value: numeral(data.total).format('0.0[000]'),
      detail: t('totalInflationDetail'),
    },
    {
      name: t('validatorInflation'),
      value: numeral(data.validator).format('0.0[000]'),
      detail: t('validatorInflationDetail'),
    },
    {
      name: t('foundationInflation'),
      value: numeral(data.foundation).format('0.0[000]'),
      detail: t('foundationInflationDetail'),
    },
  ]);
};

export const inflationGovernorData = (data: InflationGovernorType, t: any) => {
  return ([
    {
      name: t('initial'),
      value: data.initial,
      detail: t('initialDetail'),
    },
    {
      name: t('terminal'),
      value: data.terminal,
      detail: t('terminalDetail'),
    },
    {
      name: t('taper'),
      value: data.taper,
      detail: t('taperDetail'),
    },
    {
      name: t('foundation'),
      value: data.foundation,
      detail: t('foundationDetail'),
    },
    {
      name: t('foundationTerm'),
      value: data.foundationTerm,
      detail: t('foundationTermDetail'),
    },
  ]);
};

export const epochScheduleData = (data: EpochScheduleType, t: any) => {
  return ([
    {
      name: t('slotsPerEpoch'),
      value: data.slotsPerEpoch,
      detail: t('slotsPerEpochDetail'),
    },
    {
      name: t('leaderScheduleSlotOffset'),
      value: data.leaderScheduleSlotOffset,
      detail: t('leaderScheduleSlotOffsetDetail'),
    },
    {
      name: t('warmup'),
      value: `${data.warmup}`,
      detail: t('warmupDetail'),
    },
    {
      name: t('firstNormalEpoch'),
      value: data.firstNormalEpoch,
      detail: t('firstNormalEpochDetail'),
    },
    {
      name: t('firstNormalSlot'),
      value: data.firstNormalSlot,
      detail: t('firstNormalSlotDetail'),
    },
  ]);
};
