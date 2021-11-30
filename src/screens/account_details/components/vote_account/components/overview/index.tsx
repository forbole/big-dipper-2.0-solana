import React from 'react';
import { useRecoilValue } from 'recoil';
import { readDate } from '@recoil/settings';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import dayjs, { formatDayJs } from '@utils/dayjs';
import { Typography } from '@material-ui/core';
import Link from 'next/link';
import { getMiddleEllipsis } from '@utils/get_middle_ellipsis';
import CopyIcon from '@assets/icon-copy.svg';
import { useProfileRecoil } from '@recoil/profiles';
import {
  BoxDetails,
  AvatarName,
} from '@components';
import {
  ACCOUNT_DETAILS, BLOCK_DETAILS,
} from '@utils/go_to_page';
import { useScreenSize } from '@hooks';
import VoteAccountLogo from '@assets/vote-account.svg';
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
  const dateFormat = useRecoilValue(readDate);
  const authorizedVoter = useProfileRecoil(props.authorizedVoter);

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
        label: t('balance'),
        detail: props.balance,
      },
      {
        label: t('authorizedVoter'),
        className: classes.copyText,
        detail: (
          <AvatarName
            address={props.authorizedVoter}
            imageUrl={authorizedVoter.imageUrl}
            name={authorizedVoter.name}
          />
        ),
      },
      {
        label: t('authorizedWithdrawer'),
        className: classes.copyText,
        detail: (
          <>
            <CopyIcon
              className={classes.actionIcons}
              onClick={() => handleCopyToClipboard(props.authorizedWithdrawer)}
            />
            <Link href={ACCOUNT_DETAILS(props.authorizedWithdrawer)} passHref>
              <Typography variant="body1" className="value" component="a">
                {
                isMobile ? (
                  getMiddleEllipsis(props.authorizedWithdrawer, {
                    beginning: 15, ending: 5,
                  })
                ) : (
                  props.authorizedWithdrawer
                )
              }
              </Typography>
            </Link>
          </>
        ),
      },
      {
        label: t('lastTimestamp'),
        detail: formatDayJs(dayjs.utc(props.lastTimestamp), dateFormat),
      },
      {
        label: t('commission'),
        detail: props.commission,
      },
      {
        label: t('rootSlot'),
        detail: (
          <Link href={BLOCK_DETAILS(props.rootSlot)} passHref>
            <Typography variant="body1" className="value" component="a">
              {props.rootSlot}
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
