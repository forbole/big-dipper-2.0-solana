import { useState } from 'react';
import * as R from 'ramda';
import {
  useTokensQuery,
  TokensQuery,
} from '@graphql/types';
import { TokensState } from './types';

export const useProposals = () => {
  const [state, setState] = useState<TokensState>({
    loading: true,
    exists: true,
    items: [],
    hasNextPage: false,
    isNextPageLoading: false,
  });

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  // ================================
  // proposals query
  // ================================

  useTokensQuery({
    onCompleted: (data) => {
      handleSetState({
        loading: false,
        items: formatTokens(data),
      });
    },
  });

  const formatTokens = (data:TokensQuery) => {
    return data.tokenUnit.map((x) => {
      return ({
        token: x.unitName,
        address: x.address,
        price: R.pathOr(null, ['tokenPrice', 'price'], x),
        marketCap: R.pathOr(null, ['marketCap', 'price'], x),
      });
    });
  };

  return {
    state,
  };
};
