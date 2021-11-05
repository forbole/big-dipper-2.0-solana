import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { NextSeo } from 'next-seo';
import {
  Layout,
  LoadAndExist,
} from '@components';
import { useStyles } from './styles';
import { List } from './components';
import { useProposals } from './hooks';

const Tokens = () => {
  const { t } = useTranslation('tokens');
  const classes = useStyles();
  const {
    state,
    loadMoreItems,
    itemCount,
    isItemLoaded,
  } = useProposals();

  return (
    <>
      <NextSeo
        title={t('tokens')}
        openGraph={{
          title: t('tokens'),
        }}
      />
      <Layout
        navTitle={t('tokens')}
        className={classes.root}
      >
        <LoadAndExist
          loading={state.loading}
          exists={state.exists}
        >
          <List
            items={state.items}
            rawDataTotal={state.rawDataTotal}
            isItemLoaded={isItemLoaded}
            itemCount={itemCount}
            loadMoreItems={loadMoreItems}
          />
        </LoadAndExist>
      </Layout>
    </>
  );
};

export default Tokens;
