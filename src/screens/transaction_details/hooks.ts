import {
  useState, useEffect,
} from 'react';
import { useRouter } from 'next/router';
import * as R from 'ramda';
import {
  useTransactionDetailsQuery,
  TransactionDetailsQuery,
} from '@graphql/types';
import { convertMsgsToModels } from '@msg';
import { chainConfig } from '@configs';
import { formatToken } from '@utils/format_token';
import {
  TransactionState,
} from './types';

export const useTransactionDetails = () => {
  const router = useRouter();
  const [state, setState] = useState<TransactionState>({
    exists: true,
    loading: true,
    overview: {
      slot: 0,
      success: true,
      fee: {
        displayDenom: '',
        baseDenom: '',
        exponent: 0,
        value: '',
      },
      signature: '',
      timestamp: '',
    },
    messages: {
      filterBy: 'none',
      viewRaw: false,
      items: [],
    },
  });

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  useEffect(() => {
    handleSetState({
      loading: true,
      exists: true,
    });
  }, [router.query.tx]);

  // ===============================
  // Fetch data
  // ===============================
  useTransactionDetailsQuery({
    variables: {
      signature: router.query.tx as string,
    },
    onCompleted: (data) => {
      handleSetState(formatTransactionDetails(data));
    },
  });

  // ===============================
  // Parse data
  // ===============================
  const formatTransactionDetails = (data: TransactionDetailsQuery) => {
    const stateChange: any = {
      loading: false,
    };

    if (!data.transaction.length) {
      stateChange.exists = false;
      return stateChange;
    }

    // =============================
    // overview
    // =============================
    const formatOverview = () => {
      const tx = data.transaction[0];

      const overview = {
        slot: tx.slot,
        success: tx.success,
        fee: formatToken(tx.fee, chainConfig.primaryTokenUnit),
        signature: tx.signature,
        timestamp: R.pathOr('', ['block', 'timestamp'], tx),
      };

      return overview;
    };

    stateChange.overview = formatOverview();

    // =============================
    // messages
    // =============================
    const formatMessages = () => {
      const messages = convertMsgsToModels(data.transaction[0]);
      return {
        items: messages,
      };
    };
    stateChange.messages = formatMessages();
    return stateChange;
  };

  const onMessageFilterCallback = (value: string) => {
    handleSetState({
      messages: {
        filterBy: value,
      },
    });
  };

  const toggleMessageDisplay = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleSetState({
      messages: {
        viewRaw: event.target.checked,
      },
    });
  };

  const filterMessages = (messages: any[]) => {
    return messages.filter((x) => {
      if (state.messages.filterBy !== 'none') {
        return x.category === state.messages.filterBy;
      }
      return true;
    });
  };

  return {
    state,
    onMessageFilterCallback,
    toggleMessageDisplay,
    filterMessages,
  };
};
