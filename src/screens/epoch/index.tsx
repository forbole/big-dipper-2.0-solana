import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { NextSeo } from 'next-seo';
import {
  Layout,
  LoadAndExist,
  Box,
} from '@components';
import {
  Inflation,
  InflationGovernor,
  EpochSchedule,
} from './components';
import { useStyles } from './styles';

const Epoch = () => {
  const { t } = useTranslation('epoch');
  const classes = useStyles();

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
          <Box className={classes.box}>
            <Inflation />
          </Box>
          <Box className={classes.box}>
            <InflationGovernor />
          </Box>
          <Box className={classes.box}>
            <EpochSchedule />
          </Box>
        </LoadAndExist>
      </Layout>
    </>
  );
};

export default Epoch;
