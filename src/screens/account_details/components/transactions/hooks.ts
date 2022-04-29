import {
  useEffect, useState,
} from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { TxByAddressDocument } from '@graphql/transaction_by_address_documents';
import * as R from 'ramda';
import { TransactionsState } from './types';

export const useTransactions = () => {
  const router = useRouter();
  const [state, setState] = useState<TransactionsState>({
    loading: true,
    transactions: [],
  });

  useEffect(() => {
    init();
  }, []);

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  // get latest block height
  const init = async () => {
    try {
      const transactions = await getTransactions();

      handleSetState({
        loading: false,
        transactions,
      });
    } catch (error) {
      handleSetState({
        loading: false,
      });
    }
  };

  const getTransactions = async (current = '') => {
    const { data } = await axios.post(process.env.NEXT_PUBLIC_GRAPHQL_URL, {
      variables: {
        address: router.query.address as string,
        current,
        limit: 50 + 1,
      },
      query: TxByAddressDocument,
    });
    const transactions = R.pathOr([], ['data', 'transactionsByAddress'], data);
    return formatTransactions(transactions);
  };

  const formatTransactions = (data: any[]) => {
    return data.map((transaction) => {
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
