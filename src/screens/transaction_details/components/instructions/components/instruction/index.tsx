import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { Typography } from '@material-ui/core';
import { convertCamelToTitle } from '@utils/camel_to_title';
import { InstructionType } from '../../../../types';
import { useStyles } from './styles';
import { useInstruction } from './hooks';
import {
  formatInstructions, getProgramLabel,
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
  const programName = getProgramLabel(parent.program);
  const typeName = convertCamelToTitle(parent.type);

  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <div className="title__content">
          <Typography className="title__index">
            {`#${parent.index + 1}`}
          </Typography>
          <div>{`${programName}: ${typeName}`}</div>
        </div>
        <div>raw and hide</div>
      </div>
      <div>body</div>
    </div>
  );
};

export default Instruction;
