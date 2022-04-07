import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import { Typography } from '@material-ui/core';
import { getMiddleEllipsis } from '@utils/get_middle_ellipsis';
import CopyIcon from '@assets/icon-copy.svg';
import {
  Box,
  Avatar,
} from '@components';
import { useScreenSize } from '@hooks';
import { useStyles } from './styles';
import { useOverview } from './hooks';
import { HeaderType } from '../../types';

const Header: React.FC<{header: HeaderType} & ComponentDefault> = (props) => {
  const { t } = useTranslation('accounts');
  const classes = useStyles();
  const { isDesktop } = useScreenSize();
  const { handleCopyToClipboard } = useOverview(t);

  return (
    <Box className={classnames(props.className, classes.root)}>
      <Avatar
        imageUrl={props.header.imageUrl}
        address={props.header.mint}
        className={classes.avatar}
      />
      <div className={classnames(classes.content, classes.copyText)}>
        <Typography variant="h2">
          {props.header.token}
        </Typography>
        <div className="detail">
          <CopyIcon
            onClick={() => handleCopyToClipboard(props.header.mint)}
            className={classes.actionIcons}
          />
          <Typography variant="body1" className="value">
            {
                !isDesktop ? (
                  getMiddleEllipsis(props.header.mint, {
                    beginning: 15, ending: 5,
                  })
                ) : (
                  props.header.mint
                )
              }
          </Typography>
        </div>
      </div>
    </Box>
  );
};

export default Header;
