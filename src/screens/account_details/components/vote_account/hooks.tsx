import { useState } from 'react';
import * as R from 'ramda';
import { useRouter } from 'next/router';
import {
  useVoteAccountDetailsQuery,
  VoteAccountDetailsQuery,
} from '@graphql/types';
import { chainConfig } from '@configs';
import { formatToken } from '@utils/format_token';
import { VoteAccountState } from './types';

const defaultTokenUnit: TokenUnit = {
  value: '0',
  baseDenom: '',
  displayDenom: '',
  exponent: 0,
};

export const useVoteAccount = () => {
  const router = useRouter();
  const [state, setState] = useState<VoteAccountState>({
    loading: false,
    overview: {
      address: '',
      balance: defaultTokenUnit,
      voter: '',
      withdrawer: '',
      lastVote: 0,
      commission: 0,
      rootSlot: 0,
    },
  });

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  useVoteAccountDetailsQuery({
    variables: {
      address: router.query.address as string,
    },
    onCompleted: (data) => {
      handleSetState(formatNonceAccounts(data));
    },
  });

  const formatNonceAccounts = (data: VoteAccountDetailsQuery) => {
    const stateChange: any = {
      loading: false,
    };
    // ==========================
    // Overview
    // ==========================
    const formatOverview = () => {
      return ({
        address: router.query.address,
        balance: formatToken(
          R.pathOr(0, ['validator', 0, 'nativeBalance', 'balance'], data),
          chainConfig.primaryTokenUnit,
        ),
        voter: R.pathOr('', ['validator', 0, 'voter'], data),
        withdrawer: R.pathOr('', ['validator', 0, 'withdrawer'], data),
        lastVote: R.pathOr(0, ['validator', 0, 'validatorStatus', 'lastVote'], data),
        commission: R.pathOr(0, ['validator', 0, 'commission'], data),
        rootSlot: R.pathOr(0, ['validator', 0, 'validatorStatus', 'rootSlot'], data),
      });
    };
    stateChange.overview = formatOverview();

    return stateChange;
  };

  return ({
    state,
  });
};
