import {
  useState, useEffect,
} from 'react';
import * as R from 'ramda';
import { useRouter } from 'next/router';
import {
  useTokenDetailsQuery,
  TokenDetailsQuery,
} from '@graphql/types';
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

export const useTokenAccount = () => {
  const router = useRouter();
  const [state, setState] = useState<TokenDetailState>({
    // loading: true,
    loading: false,
    exists: true,
    header: {
      token: '',
      imageUrl: '',
      mint: '',
    },
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
  useTokenDetailsQuery({
    variables: {
      address: router.query.address as string,
    },
    onCompleted: (data) => {
      handleSetState(formatDetails(data));
    },
  });

  const formatDetails = (data:TokenDetailsQuery) => {
    const stateChange: any = {
      loading: false,
    };

    if (!data.tokenUnit.length) {
      stateChange.exists = false;
      return stateChange;
    }

    // header
    const formatHeader = () => {
      return ({
        token: R.pathOr('', ['tokenUnit', 0, 'unitName'], data),
        imageUrl: R.pathOr('', ['tokenUnit', 0, 'logo'], data),
        mint: R.pathOr('', ['tokenUnit', 0, 'mint'], data),
      });
    };
    stateChange.header = formatHeader();

    return stateChange;
  };

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
