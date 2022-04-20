import React from 'react';
import classnames from 'classnames';
import {
  Typography,
  Divider,
} from '@material-ui/core';
import useTranslation from 'next-translate/useTranslation';
import { useStyles } from './styles';
import { InflationGovernorType } from '../../../../types';

const Mobile: React.FC<{inflationGovernor: InflationGovernorType } & ComponentDefault> = (props) => {
  const { t } = useTranslation('epoch');
  const classes = useStyles();

  const items = [
    {
      name: t('initial'),
      value: props.inflationGovernor ? props.inflationGovernor.initial : '',
      detail: t('initialDetail'),
    },
    {
      name: t('terminal'),
      value: props.inflationGovernor ? props.inflationGovernor.terminal : '',
      detail: t('terminalDetail'),
    },
    {
      name: t('taper'),
      value: props.inflationGovernor ? props.inflationGovernor.taper : '',
      detail: t('taperDetail'),
    },
    {
      name: t('foundation'),
      value: props.inflationGovernor ? props.inflationGovernor.foundation : '',
      detail: t('foundationDetail'),
    },
    {
      name: t('foundationTerm'),
      value: props.inflationGovernor ? props.inflationGovernor.foundationTerm : '',
      detail: t('foundationTermDetail'),
    },
  ];

  return (
    <div className={props.className}>
      {items.map((x, i) => {
        return (
          <React.Fragment key={`${x.name}-${i}`}>
            <div className={classes.root}>
              <div className={classnames(props.className, classes.root)}>
                <div className={classes.flex}>
                  <div className={classes.item}>
                    <Typography variant="h4" className="label">
                      {t('name')}
                    </Typography>
                    {x.name}
                  </div>
                  <div className={classes.item}>
                    <Typography variant="h4" className="label">
                      {t('value')}
                    </Typography>
                    <Typography variant="body1" className="value">
                      {x.value}
                    </Typography>
                  </div>
                </div>
                <div className={classes.item}>
                  <Typography variant="h4" className="label">
                    {t('detail')}
                  </Typography>
                  <Typography variant="body1" className="value">
                    {x.detail}
                  </Typography>
                </div>
              </div>
            </div>
            {i !== items.length - 1 && <Divider />}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Mobile;
