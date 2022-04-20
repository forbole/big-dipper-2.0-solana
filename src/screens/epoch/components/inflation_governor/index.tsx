import React from 'react';
import dynamic from 'next/dynamic';
import {
  NoData, Box,
} from '@components';
import { useScreenSize } from '@hooks';
import classnames from 'classnames';
import { Typography } from '@material-ui/core';
import useTranslation from 'next-translate/useTranslation';
import { InflationGovernorType } from '../../types';
import { useStyles } from './styles';

const Desktop = dynamic(() => import('./components/desktop'));
const Mobile = dynamic(() => import('./components/mobile'));

const InflationGovernor: React.FC<{inflationGovernor: InflationGovernorType } & ComponentDefault> = (props) => {
  const { isDesktop } = useScreenSize();
  const { t } = useTranslation('epoch');
  const classes = useStyles();

  if (!props.inflationGovernor) {
    return (
      <Box className={classnames(props.className, classes.root)}>
        <div className={classes.root}>
          <Typography variant="h2">{t('inflationGovernor')}</Typography>
          <NoData />
        </div>
      </Box>
    );
  }

  return (
    <Box className={classnames(props.className, classes.root)}>
      <div className={classes.root}>
        <Typography variant="h2">{t('inflationGovernor')}</Typography>
        {isDesktop ? (
          <Desktop inflationGovernor={props.inflationGovernor} />
        ) : (
          <Mobile inflationGovernor={props.inflationGovernor} />
        )}
      </div>
    </Box>
  );
};

export default InflationGovernor;
