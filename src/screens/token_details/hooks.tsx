import {
  useState, useEffect,
} from 'react';
import * as R from 'ramda';
// import numeral from 'numeral';
import { useRouter } from 'next/router';
// import {
//   useBlockDetailsQuery,
//   BlockDetailsQuery,
// } from '@graphql/types';
// import { convertMsgsToModels } from '@msg';
import {
  TokenDetailState, OverviewType,
} from './types';

const dummyOverview: OverviewType = {
  address: '9n4nbM75f5Ui33ZbPYXn59EwSgE8CGsHtAeTH5YFeJ9E',
  decimals: 6,
  mintAuthority: '9n4nbM75f5Ui33ZbPYXn59EwSgE8CGsHtAeTH5YFeJ9E',
  freezeAuthority: '9n4nbM75f5Ui33ZbPYXn59EwSgE8CGsHtAeTH5YFeJ9E',
  officialSite: 'www.solana.com',
};

const dummyTransaction = {
  slot: 123548722,
  signature: '4SGxuRMcseNbwki3tGxXPpfz7iFnuo9FUpTfiM4gJ8rhH59uZYSBBK2zW27xRdGX8Sb2N4VkGUnBYt59SBKEhPfB',
  success: true,
  timestamp: '2021-09-13T20:06:17.363145',
  messages: {
    count: 0,
    items: [],
  },
};

const dummyHolder = {
  address: 'desmosvaloper1rzhewpmmdl72lhnxj6zmxr4v94f522s4hyz467',
  quantity: 4534,
  percentage: 70,
  value: 234243,
};

const dummyMarket = {
  price: 4.01,
  marketCap: 7363,
  supply: 435365,
  holders: 20,
  transactions: 0,
};

export const useBlockDetails = () => {
  const router = useRouter();
  const [state, setState] = useState<TokenDetailState>({
    // loading: true,
    loading: false,
    exists: true,
    overview: dummyOverview,
    market: dummyMarket,
    transactions: {
      hasNextPage: false,
      isNextPageLoading: false,
      offsetCount: 0,
      data: Array(20).fill(dummyTransaction),
    },
    holders: {
      hasNextPage: false,
      isNextPageLoading: false,
      offsetCount: 0,
      data: Array(20).fill(dummyHolder),
    },
  });
  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  useEffect(() => {
    // reset every call
    handleSetState({
      // loading: true,
      loading: false,
      exists: true,
    });
  }, [router.query.height]);

  // ==========================
  // Fetch Data
  // ==========================
  // useBlockDetailsQuery({
  //   variables: {
  //     height: numeral(router.query.height).value(),
  //     signatureHeight: numeral(router.query.height).value() + 1,
  //   },
  //   onCompleted: (data) => {
  //     handleSetState(formatRaws(data));
  //   },
  // });

  // const formatRaws = (data: BlockDetailsQuery) => {
  //   const stateChange: any = {
  //     loading: false,
  //   };

  //   if (!data.block.length) {
  //     stateChange.exists = false;
  //     return stateChange;
  //   }

  //   // ==========================
  //   // Overview
  //   // ==========================
  //   const formatOverview = () => {
  //     const proposerAddress = R.pathOr('', ['block', 0, 'validator', 'validatorInfo', 'operatorAddress'], data);
  //     const overview = {
  //       height: data.block[0].height,
  //       hash: data.block[0].hash,
  //       txs: data.block[0].txs,
  //       timestamp: data.block[0].timestamp,
  //       proposer: proposerAddress,
  //     };
  //     return overview;
  //   };

  //   stateChange.overview = formatOverview();

  //   // ==========================
  //   // Signatures
  //   // ==========================
  //   const formatSignatures = () => {
  //     const signatures = data.preCommits.filter((x) => x?.validator?.validatorInfo).map((x) => {
  //       return x.validator.validatorInfo.operatorAddress;
  //     });
  //     return signatures;
  //   };
  //   stateChange.signatures = formatSignatures();

  //   // ==========================
  //   // Transactions
  //   // ==========================
  //   const formatTransactions = () => {
  //     const transactions = data.transaction.map((x) => {
  //       const messages = convertMsgsToModels(x);
  //       return ({
  //         height: x.height,
  //         hash: x.hash,
  //         success: x.success,
  //         timestamp: stateChange.overview.timestamp,
  //         messages: {
  //           count: x.messages.length,
  //           items: messages,
  //         },
  //       });
  //     });

  //     return transactions;
  //   };
  //   stateChange.transactions = formatTransactions();

  //   return stateChange;
  // };

  const loadNextPageTx = async () => {
    handleSetState({
      isNextPageLoading: true,
    });
    // refetch query
    // await transactionQuery.fetchMore({
    //   variables: {
    //     offset: state.transactions.offsetCount,
    //     limit: LIMIT + 1,
    //   },
    // }).then(({ data }) => {
    //   const itemsLength = data.messagesByAddress.length;
    //   const newItems = R.uniq([...state.transactions.data, ...formatTransactions(data)]);
    //   const stateChange = {
    //     transactions: {
    //       data: newItems,
    //       hasNextPage: itemsLength === 51,
    //       isNextPageLoading: false,
    //       offsetCount: state.transactions.offsetCount + LIMIT,
    //     },
    //   };
    //   handleSetState(stateChange);
    // });
  };

  const loadNextPageHolders = async () => {
    handleSetState({
      isNextPageLoading: true,
    });
    // refetch query
    // await transactionQuery.fetchMore({
    //   variables: {
    //     offset: state.transactions.offsetCount,
    //     limit: LIMIT + 1,
    //   },
    // }).then(({ data }) => {
    //   const itemsLength = data.messagesByAddress.length;
    //   const newItems = R.uniq([...state.transactions.data, ...formatTransactions(data)]);
    //   const stateChange = {
    //     transactions: {
    //       data: newItems,
    //       hasNextPage: itemsLength === 51,
    //       isNextPageLoading: false,
    //       offsetCount: state.transactions.offsetCount + LIMIT,
    //     },
    //   };
    //   handleSetState(stateChange);
    // });
  };

  return {
    state,
    loadNextPageTx,
    loadNextPageHolders,
  };
};
