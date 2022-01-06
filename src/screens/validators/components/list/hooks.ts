/* eslint-disable max-len */
import { useState } from 'react';
import * as R from 'ramda';
import Big from 'big.js';
import {
  useValidatorsQuery,
  ValidatorsQuery,
} from '@graphql/types';
import {
  formatToken,
} from '@utils/format_token';
import { chainConfig } from '@configs';
import {
  ValidatorsState, ItemType, ValidatorType,
} from './types';

// const fakeData: ValidatorType = {
//   validator: 'desmosvaloper19dzz3wqakz7d0s550mvtjcdsde8nlhs4se98mt',
//   stake: 121212,
//   stakePercent: 12,
//   fee: 0.9,
//   lastVote: 56969523,
//   skipRate: 80,
//   skipTotal: 100, // idk what this is atm,
//   skipPercent: 55,
//   condition: 90,
//   status: 3,
//   delegators: 100,
// };

export const useValidators = () => {
  const [search, setSearch] = useState('');
  const [state, setState] = useState<ValidatorsState>({
    loading: true,
    exists: true,
    items: [],
    votingPowerOverall: 0,
    tab: 0,
    sortKey: 'validator.name',
    sortDirection: 'asc',
  });

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  // ==========================
  // Fetch Data
  // ==========================
  useValidatorsQuery({
    onCompleted: (data) => {
      handleSetState({
        loading: false,
        ...formatValidators(data),
      });
    },
  });

  // ==========================
  // Parse data
  // ==========================
  const formatValidators = (data: ValidatorsQuery) => {
    const totalActiveStake = data.validator.reduce((a, b) => {
      return a.plus(R.pathOr(0, ['validatorStatus', 'activatedStake'], b));
    }, Big(0)).toPrecision();

    const formattedItems: ValidatorType[] = data.validator.map((x) => {
      const stake = R.pathOr(0, ['validatorStatus', 'activatedStake'], x);
      const stakePercent = Big(stake).div(totalActiveStake).times(100).toPrecision();
      return ({
        validator: x.address,
        commission: x.commission,
        stake: formatToken(
          stake,
          chainConfig.primaryTokenUnit,
        ).value,
        stakePercent, // ryuash
        lastVote: R.pathOr(0, ['validatorStatus', 'lastVote'], x),
        status: R.pathOr(false, ['validatorStatus', 'active'], x),
      });
    });

    return ({
      items: formattedItems,
    });
  };

  const handleTabChange = (_event: any, newValue: number) => {
    setState((prevState) => ({
      ...prevState,
      tab: newValue,
    }));
  };

  const handleSort = (key: string) => {
    if (key === state.sortKey) {
      setState((prevState) => ({
        ...prevState,
        sortDirection: prevState.sortDirection === 'asc' ? 'desc' : 'asc',
      }));
    } else {
      setState((prevState) => ({
        ...prevState,
        sortKey: key,
        sortDirection: 'asc', // new key so we start the sort by asc
      }));
    }
  };

  const sortItems = (items: ItemType[]) => {
    let sorted: ItemType[] = R.clone(items);
    // active
    if (state.tab === 0) {
      sorted = sorted.filter((x) => x.status === true);
    }

    // delinquent
    if (state.tab === 1) {
      sorted = sorted.filter((x) => x.status !== false);
    }

    if (search) {
      sorted = sorted.filter((x) => {
        const formattedSearch = search.toLowerCase().replace(/ /g, '');
        return (
          x.validator.name.toLowerCase().replace(/ /g, '').includes(formattedSearch)
          || x.validator.address.toLowerCase().includes(formattedSearch)
        );
      });
    }

    if (state.sortKey && state.sortDirection) {
      sorted.sort((a, b) => {
        let compareA = R.pathOr(undefined, [...state.sortKey.split('.')], a);
        let compareB = R.pathOr(undefined, [...state.sortKey.split('.')], b);

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

  const handleSearch = (value: string) => {
    setSearch(value);
  };

  return {
    state,
    handleTabChange,
    handleSort,
    handleSearch,
    sortItems,
  };
};
