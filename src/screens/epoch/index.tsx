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

const Epoch = () => {
  const { t } = useTranslation('epoch');

  return (
    <>
      <NextSeo
        title={t('epoch')}
        openGraph={{
          title: t('epoch'),
        }}
      />
      <Layout navTitle={t('epoch')}>
        <LoadAndExist
          loading={false}
          exists
        >
          <Inflation />
          <InflationGovernor />
          <EpochSchedule />
        </LoadAndExist>
      </Layout>
    </>
  );
};

export default Epoch;
