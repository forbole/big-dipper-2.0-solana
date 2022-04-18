import React from 'react';
import classnames from 'classnames';
import { Typography } from '@material-ui/core';
import useTranslation from 'next-translate/useTranslation';
import { useStyles } from './styles';
import { InflationType } from '../../../../types';

const Mobile: React.FC<{inflation: InflationType } & ComponentDefault> = ({
  className,
}) => {
  const { t } = useTranslation('epoch');
  const classes = useStyles();

  return (
      <div className={classes.root}>
        <Typography variant="h4">Mobile</Typography>
      </div>
  );
};

export default Mobile;