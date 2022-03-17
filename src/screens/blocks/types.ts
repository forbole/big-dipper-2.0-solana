export type BlockType = {
  slot: number;
  leader: string;
  hash: string;
  txs: number;
  timestamp: string;
}

export type BlocksState = {
  page: number;
  loading: boolean;
  total: number;
  items: BlockType[];
}

// export type BlocksState = {
//   loading: boolean;
//   exists: boolean;
//   hasNextPage: boolean;
//   isNextPageLoading: boolean;
//   items: BlockType[];
// }

export type ItemType = Override<BlockType, { leader: AvatarName }>
