import React from 'react';
import dynamic from 'next/dynamic';
import { Box } from '@components';
import { useScreenSize } from '@hooks';
import classnames from 'classnames';
import { Typography } from '@material-ui/core';
import useTranslation from 'next-translate/useTranslation';
import { useStyles } from './styles';

const Desktop = dynamic(() => import('./components/desktop'));
const Mobile = dynamic(() => import('./components/mobile'));

const EpochDetail: React.FC<{epochDetail } & ComponentDefault> = (props) => {
  const { isDesktop } = useScreenSize();
  const { t } = useTranslation('epoch');
  const classes = useStyles();

  return (
    <Box className={classnames(props.className, classes.root)}>
      <div className={classes.root}>
        <Typography variant="h2">{t('epochSchedule')}</Typography>
        {isDesktop ? (
          <Desktop epochDetail={props.epochDetail} />
        ) : (
          <Mobile epochDetail={props.epochDetail} />
        )}
      </div>
    </Box>
  );
};

export default EpochDetail;
