import { useState } from 'react';
import * as R from 'ramda';
import { useRouter } from 'next/router';
import {
  useTxByAddressQuery, TxByAddressQuery,
} from '@graphql/types';
import { TransactionsState } from './types';

export const useTransactions = () => {
  const router = useRouter();
  const [state, setState] = useState<TransactionsState>({
    loading: true,
    transactions: [],
  });

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  useTxByAddressQuery({
    variables: {
      address: `{${router.query.address}}`,
    },
    onCompleted: (data) => {
      const transactions = formatTransactions(data);
      handleSetState({
        loading: false,
        transactions,
      });
    },
  });

  const formatTransactions = (data: TxByAddressQuery) => {
    return data.transactions.nodes.map((x) => {
      const { transaction } = x;
      return ({
        slot: transaction.slot,
        signature: transaction.signature,
        success: transaction.success,
        timestamp: R.pathOr('', ['block', 'timestamp'], transaction),
        numInstructions: R.pathOr(0, ['numInstructions'], transaction),
      });
    });
  };

  return {
    state,
  };
};
