import React from 'react';
import classnames from 'classnames';
import {
  Box,
} from '@components';

const Balance: React.FC<ComponentDefault> = ({ className }) => {
  return (
    <Box className={classnames(className)}>
      Balance
    </Box>
  );
};

export default Balance;
