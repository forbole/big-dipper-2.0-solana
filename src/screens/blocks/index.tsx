import React from 'react';
import dynamic from 'next/dynamic';
import useTranslation from 'next-translate/useTranslation';
import { NextSeo } from 'next-seo';
import {
  Layout,
  Box,
  LoadAndExist,
  NoData,
} from '@components';
import { useScreenSize } from '@hooks';
import {
  useProfilesRecoil,
} from '@recoil/profiles';
import { useStyles } from './styles';
import { useBlocks } from './hooks';

const Desktop = dynamic(() => import('./components/desktop'));
const Mobile = dynamic(() => import('./components/mobile'));

const Blocks = () => {
  const { t } = useTranslation('blocks');
  const { isDesktop } = useScreenSize();
  const classes = useStyles();
  const {
    state,
    loadNextPage,
  } = useBlocks();
  const loadMoreItems = state.isNextPageLoading ? () => null : loadNextPage;
  const isItemLoaded = (index) => !state.hasNextPage || index < state.items.length;
  const itemCount = state.hasNextPage ? state.items.length + 1 : state.items.length;

  const proposerProfiles = useProfilesRecoil(state.items.map((x) => x.leader));
  const mergedDataWithProfiles = state.items.map((x, i) => {
    return ({
      ...x,
      leader: proposerProfiles[i],
    });
  });

  return (
    <>
      <NextSeo
        title={t('blocks')}
        openGraph={{
          title: t('blocks'),
        }}
      />
      <Layout
        navTitle={t('blocks')}
        className={classes.root}
      >
        <LoadAndExist
          loading={state.loading}
          exists={state.exists}
        >
          <Box className={classes.box}>
            {!state.items.length ? (
              <NoData />
            ) : (
              <>
                {isDesktop ? (
                  <Desktop
                    items={mergedDataWithProfiles}
                    itemCount={itemCount}
                    loadMoreItems={loadMoreItems}
                    isItemLoaded={isItemLoaded}
                  />
                ) : (
                  <Mobile
                    items={mergedDataWithProfiles}
                    itemCount={itemCount}
                    loadMoreItems={loadMoreItems}
                    isItemLoaded={isItemLoaded}
                  />
                )}
              </>
            )}
          </Box>
        </LoadAndExist>
      </Layout>
    </>
  );
};

export default Blocks;
