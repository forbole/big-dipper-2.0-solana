import React from 'react';
import dynamic from 'next/dynamic';
import {
  NoData, Box,
} from '@components';
import { useScreenSize } from '@hooks';
import classnames from 'classnames';
import { Typography } from '@material-ui/core';
import useTranslation from 'next-translate/useTranslation';
import { InflationType } from '../../types';
import { useStyles } from './styles';

const Desktop = dynamic(() => import('./components/desktop'));
const Mobile = dynamic(() => import('./components/mobile'));

const Inflation: React.FC<{inflation: InflationType } & ComponentDefault> = (props) => {
  const { isDesktop } = useScreenSize();
  const { t } = useTranslation('epoch');
  const classes = useStyles();

  if (!props.inflation) {
    return (
      <Box className={classnames(props.className, classes.root)}>
        <div className={classes.root}>
          <Typography variant="h2">{t('inflation')}</Typography>
          <NoData />
        </div>
      </Box>
    );
  }

  return (
    <Box className={classnames(props.className, classes.root)}>
      <div className={classes.root}>
        <Typography variant="h2">{t('inflation')}</Typography>
        {isDesktop ? (
          <Desktop inflation={props.inflation} />
        ) : (
          <Mobile inflation={props.inflation} />
        )}
      </div>
    </Box>
  );
};

export default Inflation;
