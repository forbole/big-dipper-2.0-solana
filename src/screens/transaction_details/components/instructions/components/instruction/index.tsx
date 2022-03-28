import React from 'react';
import { Typography } from '@material-ui/core';
import { InstructionType } from '../../../../types';
import { getParentInstructions } from './utils';
import { useStyles } from './styles';
import { useInstruction } from './hooks';

const Instruction: React.FC<{instructions: InstructionType[]} & ComponentDefault> = (props) => {
  const parent = getParentInstructions(props.instructions);
  const classes = useStyles();
  const {
    state,
    toggleHide,
    toggleRaw,
  } = useInstruction();

  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <div className="title__content">
          <Typography className="title__index">
            {`#${parent.index + 1}`}
          </Typography>
          <div>{`${parent.program} (${parent.type})`}</div>
        </div>
        <div>raw and hide</div>
      </div>
      <div>body</div>
    </div>
  );
};

export default Instruction;
