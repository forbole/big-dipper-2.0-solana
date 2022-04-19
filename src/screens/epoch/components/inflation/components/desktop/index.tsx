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
import { InflationType } from '../../../../types';

const Desktop: React.FC<{inflation: InflationType } & ComponentDefault> = (props) => {
  const { t } = useTranslation('epoch');
  const classes = useStyles();

  const formattedItems = [
    {
      name: t('epoch'),
      value: props.inflation ? props.inflation.epoch : '',
      detail: t('epochDetail'),
    },
    {
      name: t('totalInflation'),
      value: props.inflation ? props.inflation.total : '',
      detail: t('totalInflationDetail'),
    },
    {
      name: t('validatorInflation'),
      value: props.inflation ? props.inflation.validator : '',
      detail: t('validatorInflationDetail'),
    },
    {
      name: t('foundationInflation'),
      value: props.inflation ? props.inflation.foundation : '',
      detail: t('foundationInflationDetail'),
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
