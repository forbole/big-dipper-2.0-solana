import React from 'react';
import classnames from 'classnames';
import {
  Box,
} from '@components';

const Transactions: React.FC<ComponentDefault> = ({ className }) => {
  return (
    <Box className={classnames(className)}>
      Transactions
    </Box>
  );
};

export default Transactions;
