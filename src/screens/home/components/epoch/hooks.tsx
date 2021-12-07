import { useState } from 'react';
import * as R from 'ramda';
import numeral from 'numeral';
import {
  useEpochQuery,
  EpochQuery,
} from '@graphql/types';

export const useEpoch = () => {
  const [state, setState] = useState<{
    epochRate: number;
    epochNumber: number;
    epochTime: number;
  }>({
    epochRate: 0,
    epochNumber: 0,
    epochTime: 0,
  });

  useEpochQuery({
    onCompleted: (data) => {
      setState(formatEpoch(data));
    },
  });

  const formatEpoch = (data: EpochQuery) => {
    const results = { ...state };

    console.log('data', data);

    const averageSlotTime = R.pathOr(0, ['0'], data);
    const slot = R.pathOr(0, ['1'], data);
    const epochNumber = slot / 432000;
    results.epochNumber = numeral(epochNumber).value();
    const epochTime = 432000 - (slot % 432000) * averageSlotTime;
    results.epochTime = numeral(epochTime).value();
    const epochRate = epochTime / 432000;
    results.epochRate = numeral(epochRate).value();

    // const bonded = R.pathOr(state.bonded, [
    //   'stakingPool',
    //   0,
    //   'bonded',
    // ], data);
    // results.bonded = numeral(formatToken(bonded, results.denom).value).value();

    // const unbonding = R.pathOr(state.bonded, [
    //   'stakingPool',
    //   0,
    //   'unbonded',
    // ], data);
    // results.unbonding = numeral(formatToken(unbonding, results.denom).value).value();

    // const unbonded = results.total - results.unbonding - results.bonded;
    // results.unbonded = unbonded;

    return results;
  };

  return {
    state,
  };
};
