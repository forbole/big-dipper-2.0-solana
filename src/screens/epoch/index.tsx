import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { NextSeo } from 'next-seo';
import {
  Layout,
  LoadAndExist,
} from '@components';
import {
  // Inflation,
  // InflationGovernor,
  // EpochSchedule,
  EpochDetail,
} from './components';
import { useStyles } from './styles';
import { useEpoch } from './hooks';

const Epoch = () => {
  const { t } = useTranslation('epoch');
  const classes = useStyles();
  const { state } = useEpoch();

  const inflationData = [
    {
      name: t('epoch'),
      value: state.inflation ? state.inflation.epoch : '',
      detail: t('epochDetail'),
    },
    {
      name: t('totalInflation'),
      value: state.inflation ? state.inflation.total : '',
      detail: t('totalInflationDetail'),
    },
    {
      name: t('validatorInflation'),
      value: state.inflation ? state.inflation.validator : '',
      detail: t('validatorInflationDetail'),
    },
    {
      name: t('foundationInflation'),
      value: state.inflation ? state.inflation.foundation : '',
      detail: t('foundationInflationDetail'),
    },
  ];

  const inflationGovernorData = [
    {
      name: t('initial'),
      value: state.inflationGovernor ? state.inflationGovernor.initial : '',
      detail: t('initialDetail'),
    },
    {
      name: t('terminal'),
      value: state.inflationGovernor ? state.inflationGovernor.terminal : '',
      detail: t('terminalDetail'),
    },
    {
      name: t('taper'),
      value: state.inflationGovernor ? state.inflationGovernor.taper : '',
      detail: t('taperDetail'),
    },
    {
      name: t('foundation'),
      value: state.inflationGovernor ? state.inflationGovernor.foundation : '',
      detail: t('foundationDetail'),
    },
    {
      name: t('foundationTerm'),
      value: state.inflationGovernor ? state.inflationGovernor.foundationTerm : '',
      detail: t('foundationTermDetail'),
    },
  ];

  const epochScheduleData = [
    {
      name: t('slotsPerEpoch'),
      value: state.epochSchedule ? state.epochSchedule.slotsPerEpoch : '',
      detail: t('slotsPerEpochDetail'),
    },
    {
      name: t('leaderScheduleSlotOffset'),
      value: state.epochSchedule ? state.epochSchedule.leaderScheduleSlotOffset : '',
      detail: t('leaderScheduleSlotOffsetDetail'),
    },
    {
      name: t('warmup'),
      value: state.epochSchedule ? `${state.epochSchedule.warmup}` : '',
      detail: t('warmupDetail'),
    },
    {
      name: t('firstNormalEpoch'),
      value: state.epochSchedule ? state.epochSchedule.firstNormalEpoch : '',
      detail: t('firstNormalEpochDetail'),
    },
    {
      name: t('firstNormalSlot'),
      value: state.epochSchedule ? state.epochSchedule.firstNormalSlot : '',
      detail: t('firstNormalSlotDetail'),
    },
  ];

  return (
    <>
      <NextSeo
        title={t('epoch')}
        openGraph={{
          title: t('epoch'),
        }}
      />
      <Layout
        navTitle={t('epoch')}
        className={classes.root}
      >
        <LoadAndExist
          loading={false}
          exists
        >
          {/* <Inflation inflation={state.inflation} />
          <InflationGovernor inflationGovernor={state.inflationGovernor} />
          <EpochSchedule epochSchedule={state.epochSchedule} /> */}
          <EpochDetail epochDetail={inflationData} />
          <EpochDetail epochDetail={inflationGovernorData} />
          <EpochDetail epochDetail={epochScheduleData} />
        </LoadAndExist>
      </Layout>
    </>
  );
};

export default Epoch;
