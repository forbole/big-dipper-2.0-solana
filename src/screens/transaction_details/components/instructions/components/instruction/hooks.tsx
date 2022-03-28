import { useState } from 'react';
import * as R from 'ramda';
import { InstructionState } from './types';

export const useInstruction = () => {
  const [state, setState] = useState<InstructionState>({
    hide: true,
    raw: false,
  });

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  const toggleHide = () => {
    handleSetState({
      hide: !state.hide,
    });
  };

  const toggleRaw = () => {
    handleSetState({
      raw: !state.raw,
    });
  };

  return {
    state,
    toggleHide,
    toggleRaw,
  };
};
