import React from 'react';
import classnames from 'classnames';
import {
  Box,
} from '@components';

const Accounts: React.FC<ComponentDefault> = ({ className }) => {
  return (
    <Box className={classnames(className)}>
      Accounts (tabs)
    </Box>
  );
};

export default Accounts;
