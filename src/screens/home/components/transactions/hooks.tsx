import { useState } from 'react';
import {
  TransactionsState, TransactionType,
} from './types';

const fakeData:TransactionType = {
  slot: 812768640,
  success: true,
  messages: 5,
  signature: '76nwV8zz8tLz97SBRXH6uwHvgHXtqJDLQfF66jZhQ857',
  timestamp: '2021-09-13T20:06:17.363145',
};

export const useTransactions = () => {
  const [state, _setState] = useState<TransactionsState>({
    items: Array(7).fill(fakeData),
  });

  // ================================
  // txs subscription
  // ================================
  // useTransactionsListenerSubscription({
  //   onSubscriptionData: (data) => {
  //     setState({
  //       items: formatTransactions(data.subscriptionData.data),
  //     });
  //   },
  // });

  // const formatTransactions = (data: TransactionsListenerSubscription) => {
  //   return data.transactions.map((x) => {
  //     return ({
  //       height: x.height,
  //       hash: x.hash,
  //       success: x.success,
  //       timestamp: x.block.timestamp,
  //       messages: x.messages.length,
  //     });
  //   });
  // };

  return {
    state,
  };
};
