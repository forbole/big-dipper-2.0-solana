import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { NextSeo } from 'next-seo';
import {
  Layout,
  LoadAndExist,
} from '@components';
// import {
//   Overview,
//   Transactions,
// } from './components';
// import { useStyles } from './styles';
// import { useBlockDetails } from './hooks';

const Epoch = () => {
  const { t } = useTranslation('epoch');
  // const classes = useStyles();
  // const { state } = useBlockDetails();
  // const {
  //   overview,
  //   transactions,
  // } = state;

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
          {/* <span className={classes.root}>
            <Overview
              {...overview}
            />
            <Transactions
              transactions={transactions}
            />
          </span> */}
        </LoadAndExist>
      </Layout>
    </>
  );
};

export default Epoch;
