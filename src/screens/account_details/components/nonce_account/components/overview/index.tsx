import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import { Typography } from '@material-ui/core';
import Link from 'next/link';
import { getMiddleEllipsis } from '@utils/get_middle_ellipsis';
import CopyIcon from '@assets/icon-copy.svg';
import { BoxDetails } from '@components';
import { ACCOUNT_DETAILS } from '@utils/go_to_page';
import { useScreenSize } from '@hooks';
import NonceAccountLogo from '@assets/nonce-account.svg';

import { useStyles } from './styles';
import { useOverview } from './hooks';
import { OverviewType } from './types';

const Overview: React.FC<OverviewType & ComponentDefault> = (props) => {
  const { t } = useTranslation('accounts');
  const classes = useStyles();
  const { isMobile } = useScreenSize();
  const {
    handleCopyToClipboard,
  } = useOverview(t);

  const data = {
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
        label: t('address'),
        className: classes.copyText,
        detail: (
          <>
            <CopyIcon
              className={classes.actionIcons}
              onClick={() => handleCopyToClipboard(props.address)}
            />
            <Typography variant="body1" className="value">
              {
                isMobile ? (
                  getMiddleEllipsis(props.address, {
                    beginning: 15, ending: 5,
                  })
                ) : (
                  props.address
                )
              }
            </Typography>
          </>
        ),
      },
      {
        label: t('authority'),
        className: classes.copyText,
        detail: (
          <>
            <CopyIcon
              className={classes.actionIcons}
              onClick={() => handleCopyToClipboard(props.authority)}
            />
            <Link href={ACCOUNT_DETAILS(props.authority)} passHref>
              <Typography variant="body1" className="value" component="a">
                {
                isMobile ? (
                  getMiddleEllipsis(props.authority, {
                    beginning: 15, ending: 5,
                  })
                ) : (
                  props.authority
                )
              }
              </Typography>
            </Link>
          </>
        ),
      },
      {
        label: t('balance'),
        detail: props.balance,
      },
      {
        label: t('blockhash'),
        detail: props.blockhash,
      },
      {
        label: t('fee'),
        detail: props.fee,
      },
    ],
  };

  return (
    <BoxDetails className={classnames(props.className, classes.root)} {...data} />
  );
};

export default Overview;
