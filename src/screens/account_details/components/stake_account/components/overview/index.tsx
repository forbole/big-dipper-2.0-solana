import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import { Typography } from '@material-ui/core';
import Link from 'next/link';
import { getMiddleEllipsis } from '@utils/get_middle_ellipsis';
import CopyIcon from '@assets/icon-copy.svg';
import { useProfileRecoil } from '@recoil/profiles';
import {
  BoxDetails,
  AvatarName,
} from '@components';
import { ACCOUNT_DETAILS } from '@utils/go_to_page';
import { useScreenSize } from '@hooks';
import StakeAccountLogo from '@assets/stake-account.svg';
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
  const validator = useProfileRecoil(props.validator);

  const data = {
    title: (
      <div className={classes.header}>
        <StakeAccountLogo />
        <Typography variant="h2">
          {t('stakeAccount')}
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
        label: t('rentReserve'),
        detail: props.rentReserve,
      },
      {
        label: t('validator'),
        className: classes.copyText,
        detail: (
          <AvatarName
            address={props.validator}
            imageUrl={validator.imageUrl}
            name={validator.name}
          />
        ),
      },
      {
        label: t('stakeAuthority'),
        className: classes.copyText,
        detail: (
          <>
            <CopyIcon
              className={classes.actionIcons}
              onClick={() => handleCopyToClipboard(props.stakeAuthority)}
            />
            <Link href={ACCOUNT_DETAILS(props.stakeAuthority)} passHref>
              <Typography variant="body1" className="value" component="a">
                {
                isMobile ? (
                  getMiddleEllipsis(props.stakeAuthority, {
                    beginning: 15, ending: 5,
                  })
                ) : (
                  props.stakeAuthority
                )
              }
              </Typography>
            </Link>
          </>
        ),
      },
      {
        label: t('withdrawAuthority'),
        className: classes.copyText,
        detail: (
          <>
            <CopyIcon
              className={classes.actionIcons}
              onClick={() => handleCopyToClipboard(props.withdrawAuthority)}
            />
            <Link href={ACCOUNT_DETAILS(props.withdrawAuthority)} passHref>
              <Typography variant="body1" className="value" component="a">
                {
                isMobile ? (
                  getMiddleEllipsis(props.withdrawAuthority, {
                    beginning: 15, ending: 5,
                  })
                ) : (
                  props.withdrawAuthority
                )
              }
              </Typography>
            </Link>
          </>
        ),
      },
      {
        label: t('delegated'),
        detail: props.delegated,
      },
      {
        label: t('rewards'),
        detail: props.rewards,
      },
      {
        label: t('balance'),
        detail: props.balance,
      },
    ],
  };

  return (
    <BoxDetails className={classnames(props.className, classes.root)} {...data} />
  );
};

export default Overview;
