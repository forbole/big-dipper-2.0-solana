import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { Typography } from '@material-ui/core';
import { InstructionType } from '../../../../types';
import { useStyles } from './styles';
import { useInstruction } from './hooks';
import {
  formatInstructions, getProgramName, getTypeName,
} from './utils';

const Instruction: React.FC<{instructions: InstructionType[]} & ComponentDefault> = (props) => {
  const { t } = useTranslation('instructions');
  const classes = useStyles();
  const {
    state,
    toggleHide,
    toggleRaw,
  } = useInstruction();

  const formattedInstructions = formatInstructions(props.instructions);
  const parent = formattedInstructions[0];
  const programName = t(getProgramName(parent.program), {}, { fallback: parent.program });
  const typeName = t(getTypeName(parent.type), {}, { fallback: parent.type });

  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <div className="title__content">
          <Typography className="title__index">
            {`#${parent.index + 1}`}
          </Typography>
          <div>{`${programName} (${typeName})`}</div>
        </div>
        <div>raw and hide</div>
      </div>
      <div>body</div>
    </div>
  );
};

export default Instruction;
