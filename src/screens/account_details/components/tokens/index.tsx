import React from 'react';
import classnames from 'classnames';
import { Box } from '@components';
import useTranslation from 'next-translate/useTranslation';
import { Typography } from '@material-ui/core';
import {
  TokensList,
} from './components';
import { TokensType } from './types';

const Tokens: React.FC<TokensType & ComponentDefault> = (props) => {
  const { t } = useTranslation('accounts');

  return (
    <Box className={classnames(props.className)}>
      <Typography variant="h2">
        {t('tokens')}
      </Typography>
      <TokensList
        data={props.tokens}
        count={props.tokens.length}
      />
    </Box>
  );
};

export default Tokens;
