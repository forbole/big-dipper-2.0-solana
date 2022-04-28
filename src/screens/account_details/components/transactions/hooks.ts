import {
  useEffect, useState,
} from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { LatestBlockHeightDocument } from '@src/graphql/block_height_documents';
import { TxByAddressDocument } from '@graphql/transaction_by_address_documents';
import * as R from 'ramda';
import { TransactionsState } from './types';

export const useTransactions = () => {
  const router = useRouter();
  const [state, setState] = useState<TransactionsState>({
    loading: true,
    transactions: [],
    startSlot: 0,
    endSlot: 0,
    total: 0,
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
      const { data } = await axios.post(process.env.NEXT_PUBLIC_GRAPHQL_URL, {
        query: LatestBlockHeightDocument,
      });
      const endSlot = R.pathOr(0, ['data', 'height', 0, 'slot'], data);
      const startSlot = endSlot - 10000; // recommended search interval

      const transactions = await getTransactions(startSlot, endSlot);

      handleSetState({
        loading: false,
        transactions,
        startSlot,
        endSlot,
      });
    } catch (error) {
      handleSetState({
        loading: false,
      });
    }
  };

  const getTransactions = async (startSlot: number, endSlot: number) => {
    const { data } = await axios.post(process.env.NEXT_PUBLIC_GRAPHQL_URL, {
      variables: {
        address: `{${router.query.address}}`,
        startSlot,
        endSlot,
      },
      query: TxByAddressDocument,
    });
    const transactions = R.pathOr([], ['data', 'instructions', 'nodes'], data);
    return formatTransactions(transactions);
  };

  const formatTransactions = (data: any[]) => {
    return data.map((x) => {
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
