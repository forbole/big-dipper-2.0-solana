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
import { HolderType } from '../../types';

const Desktop = dynamic(() => import('./components/desktop'));
const Mobile = dynamic(() => import('./components/mobile'));

const Holders: React.FC<{
  className?: string;
  data: HolderType[];
  loadNextPage: () => void;
  hasNextPage: boolean;
  isNextPageLoading: boolean;
}> = (props) => {
  const classes = useStyles();
  const { t } = useTranslation('tokens');
  const { isDesktop } = useScreenSize();

  const loadMoreItems = props.isNextPageLoading ? () => null : props.loadNextPage;
  const isItemLoaded = (index) => !props.hasNextPage || index < props.data.length;
  const itemCount = props.hasNextPage ? props.data.length + 1 : props.data.length;

  const dataProfiles = useProfilesRecoil(props.data.map((x) => x.address));
  const mergedDataWithProfiles = props.data.map((x, i) => {
    return ({
      ...x,
      address: dataProfiles[i],
    });
  });

  return (
    <Box className={classnames(props.className, classes.root)}>
      <Typography variant="h2">
        {t('holders')}
      </Typography>
      <div className={classes.list}>
        {!props.data.length ? (
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
      </div>
    </Box>
  );
};

export default Holders;
