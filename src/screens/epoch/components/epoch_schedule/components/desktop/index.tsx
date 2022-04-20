import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core';
import { columns } from './utils';
import { useStyles } from './styles';
import { EpochScheduleType } from '../../../../types';

const Desktop: React.FC<{epochSchedule: EpochScheduleType } & ComponentDefault> = (props) => {
  const { t } = useTranslation('epoch');
  const classes = useStyles();

  const formattedItems = [
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
      value: props.epochSchedule ? `${props.epochSchedule.warmup}` : '',
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
    <div className={classnames(props.className, classes.root)}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column) => {
              return (
                <TableCell
                  key={column.key}
                  align={column.align}
                  style={{ width: `${column.width}%` }}
                >
                  {t(column.key)}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {formattedItems.map((row, i) => (
            <TableRow key={`holders-row-${i}`}>
              {columns.map((column) => {
                return (
                  <TableCell
                    key={`holders-row-${i}-${column.key}`}
                    align={column.align}
                    style={{ width: `${column.width}%` }}
                  >
                    {row[column.key]}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Desktop;
