import React from 'react';
import { useStyles } from './styles';
import { FormattedInstructionType } from '../../types';

const InnerInstruction: React.FC<{
  info: FormattedInstructionType;
} & ComponentDefault> = (props) => {
  const classes = useStyles();
  console.log(props, 'props');
  return (
    <div className={classes.root}>
      inner instruction
    </div>
  );
};

export default InnerInstruction;
