import React from 'react';
import numeral from 'numeral';
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
  console.log(splitLogs);
  return (
    <Box className={classes.root}>
      <Typography variant="h2">
        {t('logs')}
      </Typography>
      <div className={classes.logs}>
        {splitLogs.map((x, i) => {
          return (
            <div className="log" key={`log-${i}`}>
              <div className="log__count">
                {`#${numeral(i + 1).format('0,0')}`}
              </div>
              <div className="log__content">
                {x.map((y, index) => {
                  let content = null;
                  if (index === 0) {
                    content = (
                      <div>
                        title
                      </div>
                    );
                  } else {
                    content = (
                      <div>
                        content
                      </div>
                    );
                  }

                  return (
                    <React.Fragment key={`content-${i}-${index}`}>
                      {content}
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </Box>
  );
};

export default Logs;
