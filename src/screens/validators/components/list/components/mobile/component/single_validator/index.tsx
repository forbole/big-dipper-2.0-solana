import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import {
  Typography,
} from '@material-ui/core';
import { useStyles } from './styles';

const SingleValidator: React.FC<{
  className?: string;
  idx: string;
  validator: React.ReactNode;
  stake: string;
  commission: string;
  lastVote: string;
  // skipRate: React.ReactNode;
}> = ({
  className,
  idx,
  validator,
  stake,
  commission,
  lastVote,
  // skipRate,
}) => {
  const { t } = useTranslation('validators');
  const classes = useStyles();
  return (
    <div className={classnames(className, classes.root)}>
      <div className={classes.flex}>
        <div className={classes.item}>
          <Typography variant="h4" className="label">
            {t('idx')}
          </Typography>
          <Typography variant="body1" className="value">
            {idx}
          </Typography>
        </div>
      </div>
      <div className={classes.item}>
        <Typography variant="h4" className="label">
          {t('validator')}
        </Typography>
        {validator}
      </div>
      <div className={classes.item}>
        <Typography variant="h4" className="label">
          {t('stake')}
        </Typography>
        {stake}
      </div>
      {/* <div className={classes.item}>
        <Typography variant="h4" className="label">
          {t('skipRate')}
        </Typography>
        {skipRate}
      </div> */}
      <div className={classes.flex}>
        <div className={classes.item}>
          <Typography variant="h4" className="label">
            {t('commission')}
          </Typography>
          <Typography variant="body1" className="value">
            {commission}
          </Typography>
        </div>
        <div className={classes.item}>
          <Typography variant="h4" className="label">
            {t('lastVote')}
          </Typography>
          <Typography variant="body1" className="value">
            {lastVote}
          </Typography>
        </div>
      </div>
    </div>

  );
};

export default SingleValidator;
