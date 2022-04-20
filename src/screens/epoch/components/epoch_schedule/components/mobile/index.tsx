import React from 'react';
import classnames from 'classnames';
import {
  Typography,
  Divider,
} from '@material-ui/core';
import useTranslation from 'next-translate/useTranslation';
import { useStyles } from './styles';
import { EpochScheduleType } from '../../../../types';

const Mobile: React.FC<{epochSchedule: EpochScheduleType } & ComponentDefault> = (props) => {
  const { t } = useTranslation('epoch');
  const classes = useStyles();

  const items = [
    {
      name: t('slotsPerEpoch'),
      value: props.epochSchedule ? props.epochSchedule.slotsPerEpoch : '',
      detail: t('slotsPerEpochDetail'),
    },
    {
      name: t('leaderScheduleSlotOffset'),
      value: props.epochSchedule ? props.epochSchedule.leaderScheduleSlotOffset : '',
      detail: t('leaderScheduleSlotOffsetDetail'),
    },
    {
      name: t('warmup'),
      value: props.epochSchedule ? props.epochSchedule.warmup : '',
      detail: t('warmupDetail'),
    },
    {
      name: t('firstNormalEpoch'),
      value: props.epochSchedule ? props.epochSchedule.firstNormalEpoch : '',
      detail: t('firstNormalEpochDetail'),
    },
    {
      name: t('firstNormalSlot'),
      value: props.epochSchedule ? props.epochSchedule.firstNormalSlot : '',
      detail: t('firstNormalSlotDetail'),
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
