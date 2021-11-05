import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { NextSeo } from 'next-seo';
import {
  Layout,
  LoadAndExist,
} from '@components';
import {
  Overview,
  Market,
  Transactions,
  Holders,
} from './components';
import { useStyles } from './styles';
import { useBlockDetails } from './hooks';

const TokenDetails = () => {
  const { t } = useTranslation('tokens');
  const classes = useStyles();
  const {
    state,
    loadNextPageTx,
    loadNextPageHolders,
  } = useBlockDetails();
  const {
    overview,
  } = state;

  return (
    <>
      <NextSeo
        title={t('tokenDetails')}
        openGraph={{
          title: t('tokenDetails'),
        }}
      />
      <Layout navTitle={t('tokenDetails')}>
        <LoadAndExist
          loading={state.loading}
          exists={state.exists}
        >
          <span className={classes.root}>
            <Overview
              className={classes.overview}
              {...overview}
            />
            <Market className={classes.market} />
            <Holders
              className={classes.holders}
              loadNextPage={loadNextPageHolders}
              data={state.transactions.data}
              hasNextPage={state.transactions.hasNextPage}
              isNextPageLoading={state.transactions.isNextPageLoading}
            />
            <Transactions
              className={classes.transactions}
              loadNextPage={loadNextPageTx}
              data={state.transactions.data}
              hasNextPage={state.transactions.hasNextPage}
              isNextPageLoading={state.transactions.isNextPageLoading}
            />
          </span>
        </LoadAndExist>
      </Layout>
    </>
  );
};

export default TokenDetails;
