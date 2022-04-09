import React from 'react';
import dynamic from 'next/dynamic';
import classnames from 'classnames';
import { Typography } from '@material-ui/core';
import useTranslation from 'next-translate/useTranslation';
import {
  Box,
  NoData,
} from '@components';
import { useScreenSize } from '@hooks';
import { useProfilesRecoil } from '@recoil/profiles';
import { useStyles } from './styles';
import { useHolders } from './hooks';

// const Desktop = dynamic(() => import('./components/desktop'));
// const Mobile = dynamic(() => import('./components/mobile'));

const TopHolders: React.FC<ComponentDefault> = (props) => {
  const classes = useStyles();
  const { t } = useTranslation('accounts');
  // const { isDesktop } = useScreenSize();

  // const dataProfiles = useProfilesRecoil(props.data.map((x) => x.address));
  // const mergedDataWithProfiles = props.data.map((x, i) => {
  //   return ({
  //     ...x,
  //     address: dataProfiles[i],
  //   });
  // });

  return (
    <Box className={classnames(props.className, classes.root)}>
      <Typography variant="h2">
        {t('topHolders')}
      </Typography>
      <div className={classes.list}>
        hello world
        {/* <Mobile
          items={mergedDataWithProfiles}
          itemCount={itemCount}
          loadMoreItems={loadMoreItems}
          isItemLoaded={isItemLoaded}
        /> */}
        {/* {!props.data.length ? (
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
        )} */}
      </div>
    </Box>
  );
};

export default TopHolders;
