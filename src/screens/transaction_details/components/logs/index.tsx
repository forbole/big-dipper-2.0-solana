import React from 'react';
import { Typography } from '@material-ui/core';
import useTranslation from 'next-translate/useTranslation';
import { Box } from '@components';
import { LogType } from '../../types';
import { splitLogsToSteps } from './utils';
import { useStyles } from './styles';

const Logs: React.FC<{ logs: LogType[] } & ComponentDefault> = (props) => {
  const { t } = useTranslation('transactions');
  const classes = useStyles();
  const splitLogs = splitLogsToSteps(props.logs);
  return (
    <Box className={classes.root}>
      <Typography variant="h2">
        {t('logs')}
      </Typography>
      <div className={classes.logs}>
        {splitLogs.map((x, i) => {
          return (
            <div className="log">
              hello world
            </div>
          );
        })}
      </div>
    </Box>
  );
};

export default Logs;
