import { useState } from 'react';
import { HoldersState } from './types';

export const useHolders = () => {
  const [state, setState] = useState<HoldersState>({})
  return (
    state,
  )
}
