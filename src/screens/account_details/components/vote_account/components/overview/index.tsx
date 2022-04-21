import React from 'react';
import numeral from 'numeral';
import { useRecoilValue } from 'recoil';
import { readDate } from '@recoil/settings';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import dayjs, { formatDayJs } from '@utils/dayjs';
import { Typography } from '@material-ui/core';
import Link from 'next/link';
import { formatNumber } from '@utils/format_token';
import { getMiddleEllipsis } from '@utils/get_middle_ellipsis';
import CopyIcon from '@assets/icon-copy.svg';
import { BoxDetails } from '@components';
import {
  ACCOUNT_DETAILS, BLOCK_DETAILS,
} from '@utils/go_to_page';
import { useScreenSize } from '@hooks';
import VoteAccountLogo from '@assets/vote-account.svg';
import { useStyles } from './styles';
import { useOverview } from './hooks';
import { OverviewType } from '../../types';

const Overview: React.FC<{overview: OverviewType} & ComponentDefault> = (props) => {
  const { t } = useTranslation('accounts');
  const classes = useStyles();
  const { isMobile } = useScreenSize();
  const {
    handleCopyToClipboard,
  } = useOverview(t);
  const dateFormat = useRecoilValue(readDate);

  const data = {
    title: (
      <div className={classes.header}>
        <VoteAccountLogo />
        <Typography variant="h2">
          {t('voteAccount')}
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
              onClick={() => handleCopyToClipboard(props.overview.address)}
            />
            <Typography variant="body1" className="value">
              {
                isMobile ? (
                  getMiddleEllipsis(props.overview.address, {
                    beginning: 15, ending: 5,
                  })
                ) : (
                  props.overview.address
                )
              }
            </Typography>
          </>
        ),
      },
      {
        label: t('balance'),
        detail: `${formatNumber(props.overview.balance.value, props.overview.balance.exponent)} ${props.overview.balance.displayDenom.toUpperCase()}`,
      },
      {
        label: t('voter'),
        className: classes.copyText,
        detail: (
          <>
            <CopyIcon
              className={classes.actionIcons}
              onClick={() => handleCopyToClipboard(props.overview.voter)}
            />
            <Typography variant="body1" className="value">
              {
                isMobile ? (
                  getMiddleEllipsis(props.overview.voter, {
                    beginning: 15, ending: 5,
                  })
                ) : (
                  props.overview.voter
                )
              }
            </Typography>
          </>
        ),
      },
      {
        label: t('withdrawer'),
        className: classes.copyText,
        detail: (
          <>
            <CopyIcon
              className={classes.actionIcons}
              onClick={() => handleCopyToClipboard(props.overview.withdrawer)}
            />
            <Link href={ACCOUNT_DETAILS(props.overview.withdrawer)} passHref>
              <Typography variant="body1" className="value" component="a">
                {
                isMobile ? (
                  getMiddleEllipsis(props.overview.withdrawer, {
                    beginning: 15, ending: 5,
                  })
                ) : (
                  props.overview.withdrawer
                )
              }
              </Typography>
            </Link>
          </>
        ),
      },
      {
        label: t('lastTimestamp'),
        detail: formatDayJs(dayjs.utc(props.overview.lastTimestamp), dateFormat),
      },
      {
        label: t('commission'),
        detail: `${props.overview.commission}%`,
      },
      {
        label: t('rootSlot'),
        detail: (
          <Link href={BLOCK_DETAILS(props.overview.rootSlot)} passHref>
            <Typography variant="body1" className="value" component="a">
              {numeral(props.overview.rootSlot).format('0,0')}
            </Typography>
          </Link>
        ),
      },
    ],
  };

  return (
    <BoxDetails className={classnames(props.className, classes.root)} {...data} />
  );
};

export default Overview;
