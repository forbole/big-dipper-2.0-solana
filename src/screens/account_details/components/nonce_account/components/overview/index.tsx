import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import {
  Typography,
} from '@material-ui/core';
import { getMiddleEllipsis } from '@utils/get_middle_ellipsis';
import CopyIcon from '@assets/icon-copy.svg';
import {
  BoxDetails,
} from '@components';
import { useScreenSize } from '@hooks';
import NonceAccountLogo from '@assets/nonce-account.svg';
import { useStyles } from './styles';
import { useOverview } from './hooks';
import { OverviewType } from './types';

const Overview: React.FC<OverviewType & ComponentDefault> = ({
  className,
  address,
}) => {
  const { t } = useTranslation('accounts');
  const classes = useStyles();
  const { isDesktop } = useScreenSize();
  const {
    handleCopyToClipboard,
  } = useOverview(t);

  const dummyProps = {
    title: (
      <div className={classes.header}>
        <NonceAccountLogo />
        <Typography variant="h2">
          {t('nonceAccount')}
        </Typography>
      </div>
    ),
    details: [
      {
        label: 'slot',
        detail: '100,000,000',
      },
      {
        label: 'hash',
        detail: '76nwV8zz8tLz97SBRXH6uwHvgHXtqJDLQfF66jZhQ857',
      },
    ],
  };

  return (
    <BoxDetails className={classnames(className, classes.root)} {...dummyProps} />
  );
};

export default Overview;
