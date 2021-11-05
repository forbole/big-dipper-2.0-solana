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
import { BlockDetailState } from './types';

const dummyOverview = {
  slot: 40000,
  hash: '35SD2SaqLUvPBnEBRFUxQjjvS6tmzaPvLeJYQC1QV5E1',
  leader: 'desmosvaloper1rzhewpmmdl72lhnxj6zmxr4v94f522s4hyz467',
  timestamp: '2021-09-13T20:06:17.363145',
  parentSlot: 60000,
  parentHash: '35SD2SaqLUvPBnEBRFUxQjjvS6tmzaPvLeJYQC1QV5E1',
  processedTx: 300,
  successfulTx: 249,
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

export const useBlockDetails = () => {
  const router = useRouter();
  const [state, setState] = useState<BlockDetailState>({
    // loading: true,
    loading: false,
    exists: true,
    overview: dummyOverview,
    // overview: {
    //   height: 0,
    //   hash: '',
    //   txs: 0,
    //   timestamp: '',
    //   proposer: '',
    // },
    // transactions: [],
    transactions: Array(20).fill(dummyTransaction),
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

  return {
    state,
  };
};
