import {
  useState, useEffect,
} from 'react';
import { useRouter } from 'next/router';
import * as R from 'ramda';
import {
  useTransactionDetailsQuery,
  TransactionDetailsQuery,
} from '@graphql/types';
import { formatDenom } from '@utils/format_denom';
import { convertMsgsToModels } from '@msg';
import {
  TransactionState,
} from './types';

const fakeOverview = {
  slot: 2343354,
  success: true,
  confirmations: 'MAX',
  fee: 0.4,
  signature: '2mGBpvVcxhLXpnTEeDj4aV1SvVCnXcPKroj3idjnri7TwcR4W2UVUkjEUAHk5fL4Wh3EXiwXLw3cDBe6Rbn8sjUU',
  timestamp: '2021-09-13T20:06:17.363145',
};

export const useTransactionDetails = () => {
  const router = useRouter();
  const [state, setState] = useState<TransactionState>({
    exists: true,
    loading: true,
    overview: fakeOverview,
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
      // loading: true,
      loading: false,
      exists: true,
    });
  }, [router.query.tx]);

  // ===============================
  // Fetch data
  // ===============================
  // useTransactionDetailsQuery({
  //   variables: {
  //     hash: router.query.tx as string,
  //   },
  //   onCompleted: (data) => {
  //     handleSetState(formatTransactionDetails(data));
  //   },
  // });

  // ===============================
  // Parse data
  // ===============================
  // const formatTransactionDetails = (data: TransactionDetailsQuery) => {
  //   const stateChange: any = {
  //     loading: false,
  //   };

  //   if (!data.transaction.length) {
  //     stateChange.exists = false;
  //     return stateChange;
  //   }

  //   // =============================
  //   // overview
  //   // =============================
  //   const formatOverview = () => {
  //     const { fee } = data.transaction[0];
  //     const feeAmount = R.pathOr({
  //       denom: '',
  //       amount: 0,
  //     }, ['amount', 0], fee);
  //     const { success } = data.transaction[0];
  //     const overview = {
  //       hash: data.transaction[0].hash,
  //       height: data.transaction[0].height,
  //       timestamp: data.transaction[0].block.timestamp,
  //       fee: formatDenom(feeAmount.amount, feeAmount.denom),
  //       gasUsed: data.transaction[0].gasUsed,
  //       gasWanted: data.transaction[0].gasWanted,
  //       success,
  //       memo: data.transaction[0].memo,
  //       error: success ? '' : data.transaction[0].rawLog,
  //     };
  //     return overview;
  //   };

  //   stateChange.overview = formatOverview();

  //   // =============================
  //   // messages
  //   // =============================
  //   const formatMessages = () => {
  //     const messages = convertMsgsToModels(data.transaction[0]);
  //     return {
  //       items: messages,
  //     };
  //   };
  //   stateChange.messages = formatMessages();
  //   return stateChange;
  // };

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
