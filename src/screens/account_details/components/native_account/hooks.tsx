import { useState } from 'react';
import * as R from 'ramda';
import { NativeAccountState } from './types';
import { fakeData } from './fake';

export const useNativeAccount = () => {
  const [state, setState] = useState<NativeAccountState>({
    loading: false,
    exists: true,
    ...fakeData,
    // overview: {
    //   address: '',
    // },
  });

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  return ({
    state,
  });
};
