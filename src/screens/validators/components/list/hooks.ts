/* eslint-disable max-len */
import { useState } from 'react';
import * as R from 'ramda';
import {
  ValidatorsState, ItemType, ValidatorType,
} from './types';

const fakeData: ValidatorType = {
  validator: 'desmosvaloper19dzz3wqakz7d0s550mvtjcdsde8nlhs4se98mt',
  stake: 121212,
  stakePercent: 12,
  fee: 0.9,
  lastVote: 56969523,
  skipRate: 80,
  skipTotal: 100, // idk what this is atm,
  skipPercent: 55,
  condition: 90,
  status: 3,
  delegators: 100,
};

export const useValidators = () => {
  const [search, setSearch] = useState('');
  const [state, setState] = useState<ValidatorsState>({
    // loading: true,
    loading: false,
    exists: true,
    // items: [],
    items: Array(50).fill(fakeData),
    votingPowerOverall: 0,
    tab: 0,
    sortKey: 'validator.name',
    sortDirection: 'asc',
  });

  // const handleSetState = (stateChange: any) => {
  //   setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  // };

  // ==========================
  // Fetch Data
  // ==========================
  // useValidatorsQuery({
  //   onCompleted: (data) => {
  //     handleSetState({
  //       loading: false,
  //       ...formatValidators(data),
  //     });
  //   },
  // });

  // ==========================
  // Parse data
  // ==========================
  // const formatValidators = (data: ValidatorsQuery) => {
  //   const stakingParams = StakingParams.fromJson(R.pathOr({}, ['stakingParams', 0, 'params'], data));
  //   const slashingParams = SlashingParams.fromJson(R.pathOr({}, ['slashingParams', 0, 'params'], data));
  //   const votingPowerOverall = formatDenom(
  //     R.pathOr(0, ['stakingPool', 0, 'bondedTokens'], data),
  //     stakingParams.bondDenom,
  //   ).value;

  //   const { signedBlockWindow } = slashingParams;

  //   const formattedItems = data.validator.filter((x) => x.validatorInfo).map((x) => {
  //     const votingPower = R.pathOr(0, ['validatorVotingPowers', 0, 'votingPower'], x);
  //     const votingPowerPercent = numeral((votingPower / votingPowerOverall) * 100).value();
  //     const totalDelegations = x.delegations.reduce((a, b) => {
  //       return a + numeral(R.pathOr(0, ['amount', 'amount'], b)).value();
  //     }, 0);

  //     const [selfDelegation] = x.delegations.filter(
  //       (y) => {
  //         return y.delegatorAddress === x.validatorInfo.selfDelegateAddress;
  //       },
  //     );
  //     const self = numeral(R.pathOr(0, ['amount', 'amount'], selfDelegation)).value();
  //     const selfPercent = (self / (totalDelegations || 1)) * 100;

  //     const missedBlockCounter = R.pathOr(0, ['validatorSigningInfos', 0, 'missedBlocksCounter'], x);
  //     const condition = getValidatorCondition(signedBlockWindow, missedBlockCounter);

  //     return ({
  //       validator: x.validatorInfo.operatorAddress,
  //       votingPower,
  //       votingPowerPercent,
  //       commission: R.pathOr(0, ['validatorCommissions', 0, 'commission'], x) * 100,
  //       self,
  //       selfPercent,
  //       condition,
  //       status: R.pathOr(0, ['validatorStatuses', 0, 'status'], x),
  //       jailed: R.pathOr(false, ['validatorStatuses', 0, 'jailed'], x),
  //       delegators: x.delegations.length,
  //     });
  //   });

  //   return {
  //     votingPowerOverall,
  //     items: formattedItems,
  //   };
  // };

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

    if (state.tab === 0) {
      sorted = sorted.filter((x) => x.status === 3);
    }

    if (state.tab === 1) {
      sorted = sorted.filter((x) => x.status !== 3);
    }

    if (search) {
      sorted = sorted.filter((x) => {
        return (
          x.validator.name.toLowerCase().replace(/ /g, '').includes(search.toLowerCase())
          || x.validator.address.toLowerCase().includes(search.toLowerCase())
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