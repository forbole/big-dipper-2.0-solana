import { useState } from 'react';
import {
  BlocksState, BlockType,
} from './types';

const fakeData:BlockType = {
  slot: 812768640,
  leader: 'desmosvaloper1rzhewpmmdl72lhnxj6zmxr4v94f522s4hyz467',
  hash: '76nwV8zz8tLz97SBRXH6uwHvgHXtqJDLQfF66jZhQ857',
  txs: 2,
  timestamp: '2021-09-13T20:06:17.363145',
};

export const useBlocks = () => {
  const [state, _setState] = useState<BlocksState>({
    items: Array(7).fill(fakeData),
  });

  // const handleSetState = (stateChange: any) => {
  //   setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  // };

  // const formatBlocks = (data: BlocksListenerSubscription) => {
  //   return data.blocks.map((x) => {
  //     const proposerAddress = R.pathOr('', ['validator', 'validatorInfo', 'operatorAddress'], x);
  //     return ({
  //       slot: x.height,
  //       txs: x.txs,
  //       hash: x.hash,
  //       timestamp: x.timestamp,
  //       leader: proposerAddress,
  //     });
  //   });
  // };

  return {
    state,
  };
};
