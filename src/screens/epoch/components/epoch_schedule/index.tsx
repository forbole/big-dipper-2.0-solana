import React from 'react';
import dynamic from 'next/dynamic';
import {
  NoData, Box,
} from '@components';
import { useScreenSize } from '@hooks';
import classnames from 'classnames';
import { Typography } from '@material-ui/core';
import useTranslation from 'next-translate/useTranslation';
import { EpochScheduleType } from '../../types';
import { useStyles } from './styles';

const Desktop = dynamic(() => import('./components/desktop'));
const Mobile = dynamic(() => import('./components/mobile'));

const EpochSchedule: React.FC<{epochSchedule: EpochScheduleType } & ComponentDefault> = (props) => {
  const { isDesktop } = useScreenSize();
  const { t } = useTranslation('epoch');
  const classes = useStyles();

  if (!props.epochSchedule) {
    return (
      <Box className={classnames(props.className, classes.root)}>
        <div className={classes.root}>
          <Typography variant="h2">{t('epochSchedule')}</Typography>
          <NoData />
        </div>
      </Box>
    );
  }

  return (
    <Box className={classnames(props.className, classes.root)}>
      <div className={classes.root}>
        <Typography variant="h2">{t('epochSchedule')}</Typography>
        {isDesktop ? (
          <Desktop epochSchedule={props.epochSchedule} />
        ) : (
          <Mobile epochSchedule={props.epochSchedule} />
        )}
      </div>
    </Box>
  );
};

export default EpochSchedule;
