import React from 'react';
import classnames from 'classnames';
import numeral from 'numeral';
import Link from 'next/link';
import {
  Typography,
  Divider,
} from '@material-ui/core';
import useTranslation from 'next-translate/useTranslation';
import { BLOCK_DETAILS } from '@utils/go_to_page';
import {
  Box,
  Avatar,
  Markdown,
} from '@components';
import { useStyles } from './styles';
import { ValidatorProfileType } from '../../types';

const Validator: React.FC<{validator: ValidatorProfileType} & ComponentDefault> = (props) => {
  const classes = useStyles();
  const { t } = useTranslation('accounts');

  return (
    <Box className={classnames(props.className)}>
      <div className={classes.bio}>
        <Avatar
          address={props.validator.address}
          imageUrl={props.validator.imageUrl}
          className={classnames(classes.avatar, classes.desktopAvatar)}
        />
        <div>
          <div className="bio__header">
            {/* ======================== */}
            {/* mobile header */}
            {/* ======================== */}
            <div className={classes.header}>
              <Avatar
                address={props.validator.address}
                imageUrl={props.validator.imageUrl}
                className={classnames(classes.avatar, classes.mobile)}
              />
              <div className="header__content">
                <Typography variant="h2">
                  {props.validator.name}
                </Typography>
              </div>
            </div>
          </div>
          {/* ======================== */}
          {/* bio */}
          {/* ======================== */}
          {props.validator.description && (
            <div className="bio__content">
              <Markdown markdown={props.validator.description} />
            </div>
          )}
        </div>
      </div>

      <Divider className={classes.divider} />
      <div>
        <div className={classes.item}>
          <Typography variant="h4" className="label">
            {t('website')}
          </Typography>
          <Typography className="value">
            {props.validator.website || '-'}
          </Typography>
        </div>
        <div className={classes.item}>
          <Typography variant="h4" className="label">
            {t('commission')}
          </Typography>
          <Typography className="value">
            {`${props.validator.commission}%`}
          </Typography>
        </div>
        <div className={classes.item}>
          <Typography variant="h4" className="label">
            {t('lastVote')}
          </Typography>
          <Link href={BLOCK_DETAILS(props.validator.lastVote)} passHref>
            <Typography variant="body1" className="value" component="a">
              {numeral(props.validator.lastVote).format('0,0')}
            </Typography>
          </Link>
        </div>
        <div className={classes.item}>
          <Typography variant="h4" className="label">
            {t('rootSlot')}
          </Typography>
          <Link href={BLOCK_DETAILS(props.validator.rootSlot)} passHref>
            <Typography variant="body1" className="value" component="a">
              {numeral(props.validator.rootSlot).format('0,0')}
            </Typography>
          </Link>
        </div>
      </div>
    </Box>
  );
};

export default Validator;
