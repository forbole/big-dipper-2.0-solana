import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { NextSeo } from 'next-seo';
import {
  Layout,
  LoadAndExist,
} from '@components';
import {
  Inflation,
  InflationGovernor,
  EpochSchedule,
} from './components';
import { useStyles } from './styles';
import { useEpoch } from './hooks';

const Epoch = () => {
  const { t } = useTranslation('epoch');
  const classes = useStyles();
  const { state } = useEpoch();

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
          <Inflation inflation={state.inflation} />
          <InflationGovernor inflationGovernor={state.inflationGovernor} />
          <EpochSchedule epochSchedule={state.epochSchedule} />
        </LoadAndExist>
      </Layout>
    </>
  );
};

export default Epoch;
