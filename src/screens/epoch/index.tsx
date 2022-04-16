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
  console.log(state);

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
          <span>
            <Inflation />
            <InflationGovernor />
            <EpochSchedule />
          </span>
        </LoadAndExist>
      </Layout>
    </>
  );
};

export default Epoch;
