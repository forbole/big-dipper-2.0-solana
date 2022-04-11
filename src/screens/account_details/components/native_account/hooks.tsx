import { useState } from 'react';
import * as R from 'ramda';
import { useRouter } from 'next/router';
import {
  useNativeAccountDetailsQuery,
  NativeAccountDetailsQuery,
} from '@graphql/types';
import { NativeAccountState } from './types';

export const useNativeAccount = () => {
  const router = useRouter();
  const [state, setState] = useState<NativeAccountState>({
    loading: false,
    exists: true,
    overview: {
      address: '',
    },
  });

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  useNativeAccountDetailsQuery({
    variables: {
      address: router.query.address as string,
    },
    onCompleted: (data) => {
      handleSetState(formatNativeAccounts(data));
    },
  });

  const formatNativeAccounts = (_data: NativeAccountDetailsQuery) => {
    const stateChange: any = {
      loading: false,
    };
    // ==========================
    // Overview
    // ==========================
    const formatOverview = () => {
      return ({
        address: router.query.address,
      });
    };
    stateChange.overview = formatOverview();

    // ==========================
    // Balance
    // ==========================
    return stateChange;
  };

  return ({
    state,
  });
};
