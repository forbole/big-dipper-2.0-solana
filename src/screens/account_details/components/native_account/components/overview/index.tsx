import React from 'react';
import classnames from 'classnames';
import {
  Box,
} from '@components';

const Overview: React.FC<ComponentDefault> = ({ className }) => {
  return (
    <Box className={classnames(className)}>
      overview
    </Box>
  );
};

export default Overview;
