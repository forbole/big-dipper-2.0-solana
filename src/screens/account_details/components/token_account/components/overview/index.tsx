import React from 'react';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { getMiddleEllipsis } from '@utils/get_middle_ellipsis';
import { Typography } from '@material-ui/core';
import CopyIcon from '@assets/icon-copy.svg';
import { ACCOUNT_DETAILS } from '@utils/go_to_page';
import { BoxDetails } from '@components';
import { OverviewType } from '../../types';
import { useOverview } from './hooks';
import { useStyles } from './styles';

const Overview: React.FC<OverviewType & ComponentDefault> = (props, { className }) => {
  const { t } = useTranslation('accounts');
  const classes = useStyles();
  const { handleCopyToClipboard } = useOverview();

  return (
    <BoxDetails
      className={className}
      title={t('overview')}
      details={[
        {
          label: t('address'),
          className: classes.copyText,
          detail: (
            <>
              <CopyIcon onClick={() => handleCopyToClipboard(props.address)} />
              <Typography variant="body1" className="value">
                {getMiddleEllipsis(props.address, {
                  beginning: 15, ending: 5,
                })}
              </Typography>
            </>
          ),
        },
        {
          label: t('decimals'),
          detail: props.decimals,
        },
        {
          label: t('mintAuthority'),
          className: classes.copyText,
          detail: (
            <>
              <CopyIcon onClick={() => handleCopyToClipboard('1334')} />
              <Link href={ACCOUNT_DETAILS(props.address)} passHref>
                <Typography variant="body1" className="value" component="a">
                  {getMiddleEllipsis(props.address, {
                    beginning: 15, ending: 5,
                  })}
                </Typography>
              </Link>
            </>
          ),
        },
        {
          label: t('freezeAuthority'),
          className: classes.copyText,
          detail: (
            <>
              <CopyIcon onClick={() => handleCopyToClipboard('1334')} />
              <Link href={ACCOUNT_DETAILS(props.freezeAuthority)} passHref>
                <Typography variant="body1" className="value" component="a">
                  {getMiddleEllipsis(props.freezeAuthority, {
                    beginning: 15, ending: 5,
                  })}
                </Typography>
              </Link>
            </>
          ),
        },
        {
          label: t('officialSite'),
          detail: (
            <Typography
              variant="body1"
              className="value"
              component="a"
              href={props.officialSite}
              target="_blank"
              rel="noopener"
            >
              {props.officialSite}
            </Typography>
          ),
        },
      ]}
    />
  );
};

export default Overview;
