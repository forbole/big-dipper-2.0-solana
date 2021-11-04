import React from 'react';
import {
  Typography,
} from '@material-ui/core';
import {
  InfoPopover, ConditionExplanation,
} from '@components';

export const fetchColumns = (t): {
  key: string;
  align?: 'left' | 'center' | 'right' | 'justify' | 'inherit';
  width: number;
  component?: React.ReactNode;
  sortKey?: string;
  sort?: boolean;
}[] => {
  return ([
    {
      key: 'idx',
      width: 5,
    },
    {
      key: 'validator',
      sortKey: 'validator.name',
      width: 20,
      sort: true,
    },
    {
      key: 'stake',
      sortKey: 'stake',
      align: 'right',
      width: 15,
      sort: true,
    },
    {
      key: 'fee',
      sortKey: 'fee',
      align: 'right',
      width: 10,
      sort: true,
    },
    {
      key: 'lastVote',
      sortKey: 'lastVote',
      align: 'right',
      width: 10,
      sort: true,
    },
    {
      key: 'skipRate',
      sortKey: 'skipRate',
      align: 'right',
      width: 25,
      sort: true,
    },
    {
      key: 'condition',
      align: 'center',
      width: 15,
      component: (
        <Typography variant="h4" className="label popover">
          {t('condition')}
          <InfoPopover
            content={<ConditionExplanation />}
          />
        </Typography>
      ),
    },
  ]);
};
