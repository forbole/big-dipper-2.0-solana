import { useState } from 'react';
import * as R from 'ramda';
import { InstructionState } from './types';

export const useInstruction = () => {
  const [state, setState] = useState<InstructionState>({
    hide: false,
    raw: false,
  });

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  return ({
    state,
  });
};
