import { useState } from 'react';
import * as R from 'ramda';
import {
  useTokensQuery,
  TokensQuery,
} from '@graphql/types';
import {
  TokensState, TokenType,
} from './types';

export const useProposals = () => {
  const [search, setSearch] = useState('');
  const [state, setState] = useState<TokensState>({
    loading: true,
    exists: true,
    items: [],
    hasNextPage: false,
    isNextPageLoading: false,
    sortKey: 'token',
    sortDirection: 'asc',
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
        marketCap: R.pathOr(null, ['tokenPrice', 'marketCap'], x),
      });
    });
  };

  const handleSearch = (value: string) => {
    setSearch(value);
  };

  const handleSort = (key: string) => {
    if (key === state.sortKey) {
      handleSetState({
        sortDirection: state.sortDirection === 'asc' ? 'desc' : 'asc',
      });
    } else {
      handleSetState({
        sortKey: key,
        sortDirection: 'asc', // new key so we start the sort by asc
      });
    }
  };

  const sortItems = (items: TokenType[]) => {
    console.log('i\'v been called');
    let sorted: TokenType[] = R.clone(items);

    if (search) {
      sorted = sorted.filter((x) => {
        const formattedSearch = search.toLowerCase().replace(/ /g, '');
        return (
          x.token.toLowerCase().replace(/ /g, '').includes(formattedSearch)
          || x.address.toLowerCase().includes(formattedSearch)
        );
      });
    }
    console.log(state.sortKey, 'key');
    if (state.sortKey && state.sortDirection) {
      sorted.sort((a, b) => {
        let compareA = R.pathOr(undefined, [...state.sortKey.split('.')], a);
        let compareB = R.pathOr(undefined, [...state.sortKey.split('.')], b);

        // if (state.sortKey === 'price' && a.token === '007 Exchange') {
        //   console.log(compareA, '007 Exchange');
        // }

        if (typeof compareA === 'string') {
          compareA = compareA.toLowerCase();
          compareB = compareB.toLowerCase();
        }

        if (compareA < compareB) {
          return state.sortDirection === 'asc' ? -1 : 1;
        }
        if (compareA > compareB) {
          return state.sortDirection === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }

    return sorted;
  };

  return {
    state,
    handleSearch,
    sortItems,
    handleSort,
  };
};
