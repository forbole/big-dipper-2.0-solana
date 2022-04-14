import React from 'react';
import classnames from 'classnames';
import { Typography } from '@material-ui/core';
import useTranslation from 'next-translate/useTranslation';
import { Box } from '@components';
import { useStyles } from './styles';

const InflationGovernor: React.FC<ComponentDefault> = ({
  className,
}) => {
  const { t } = useTranslation('epoch');
  const classes = useStyles();
  return (
    <Box className={classnames(className, classes.root)}>
      <div className={classes.header}>
        <Typography variant="h2">{t('inflationGovernor')}</Typography>
      </div>
    </Box>

  );
};

export default InflationGovernor;
