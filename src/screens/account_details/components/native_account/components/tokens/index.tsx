import React from 'react';
import classnames from 'classnames';
import {
  Box,
} from '@components';

const Tokens: React.FC<ComponentDefault> = ({ className }) => {
  return (
    <Box className={classnames(className)}>
      Tokens
    </Box>
  );
};

export default Tokens;
