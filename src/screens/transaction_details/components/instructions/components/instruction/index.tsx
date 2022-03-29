import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import {
  Typography,
  Button,
  Collapse,
} from '@material-ui/core';
import { KeyboardArrowDown } from '@material-ui/icons';
import { convertCamelToTitle } from '@utils/camel_to_title';
import { InstructionType } from '../../../../types';
import { useStyles } from './styles';
import { useInstruction } from './hooks';
import { formatInstructions } from './utils';
import { DisplayInstruction } from './components';

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
  const typeName = convertCamelToTitle(parent.data.type);

  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <div className="title__content">
          <Typography className="title__index">
            {`#${parent.data.index + 1}`}
          </Typography>
          <Typography>
            {`${parent.label}: ${typeName}`}
          </Typography>
        </div>
        <div className="title__actions">
          <Button
            disableElevation
            size="small"
            variant="outlined"
            onClick={toggleRaw}
          >
            {t('raw')}
          </Button>
          <KeyboardArrowDown
            className={classnames('title__actions-display', {
              'title__actions-display--hide': state.hide,
              'title__actions-display--show': !state.hide,
            })}
            onClick={toggleHide}
          />
        </div>
      </div>
      <Collapse in={!state.hide}>
        <div className={classes.parent}>
          <DisplayInstruction instruction={parent} raw={state.raw} />
        </div>
      </Collapse>
    </div>
  );
};

export default Instruction;
