import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { NextSeo } from 'next-seo';
import {
  usePagination,
} from '@hooks';
import {
  Layout,
  Box,
  NoData,
  Loading,
  Pagination,
} from '@components';
import { useProfilesRecoil } from '@recoil/profiles';
import { useStyles } from './styles';
import {
  useBlocks, PAGE_SIZE,
} from './hooks';
import { BlocksList } from './components';

const Blocks = () => {
  const { t } = useTranslation('blocks');
  const classes = useStyles();
  const {
    state, handlePageChangeCallback,
  } = useBlocks();
  const {
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
  } = usePagination({
    rowsPage: PAGE_SIZE,
    pageChangeCallback: handlePageChangeCallback,
  });

  const proposerProfiles = useProfilesRecoil(state.items.map((x) => x.leader));
  const mergedDataWithProfiles = state.items.map((x, i) => {
    return ({
      ...x,
      leader: proposerProfiles[i],
    });
  });

  let component = null;

  if (state.loading) {
    component = <Loading />;
  } else if (!state.items.length) {
    component = <NoData />;
  } else {
    component = <BlocksList items={mergedDataWithProfiles} />;
  }

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
        {/* <LoadAndExist
          loading={state.loading}
          exists={state.exists}
        > */}
        <Box className={classes.box}>
          {component}
          <Pagination
            className={classes.paginate}
            total={state.total}
            rowsPerPage={rowsPerPage}
            page={page}
            handleChangePage={handleChangePage}
            handleChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Box>
        {/* </LoadAndExist> */}
      </Layout>
    </>
  );
};

export default Blocks;
