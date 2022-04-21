import { useState } from 'react';
import * as R from 'ramda';
import { useRouter } from 'next/router';
import {
  useStakeAccountDetailsQuery,
  StakeAccountDetailsQuery,
} from '@graphql/types';
import { chainConfig } from '@configs';
import { formatToken } from '@utils/format_token';
import { StakeAccountState } from './types';

const defaultTokenUnit: TokenUnit = {
  value: '0',
  baseDenom: '',
  displayDenom: '',
  exponent: 0,
};

export const useTokenDetailAccount = () => {
  const router = useRouter();
  const [state, setState] = useState<StakeAccountState>({
    loading: false,
    overview: {
      address: '',
      balance: defaultTokenUnit,
      staker: '',
      withdrawer: '',
    },
  });

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  useStakeAccountDetailsQuery({
    variables: {
      address: router.query.address as string,
    },
    onCompleted: (data) => {
      handleSetState(formatTokenAccounts(data));
    },
  });

  const formatTokenAccounts = (data: StakeAccountDetailsQuery) => {
    const stateChange: any = {
      loading: false,
    };
    // ==========================
    // Overview
    // ==========================
    const formatOverview = () => {
      return ({
        address: router.query.address,
        staker: R.pathOr('', ['stakeAccount', 0, 'staker'], data),
        withdrawer: R.pathOr('', ['stakeAccount', 0, 'withdrawer'], data),
        balance: formatToken(
          R.pathOr(0, ['stakeAccount', 0, 'nativeBalance', 'balance'], data),
          chainConfig.primaryTokenUnit,
        ),
      });
    };
    stateChange.overview = formatOverview();

    return stateChange;
  };

  return ({
    state,
  });
};
