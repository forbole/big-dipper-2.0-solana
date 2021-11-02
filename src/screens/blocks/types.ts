export type BlockType = {
  slot: number;
  leader: string;
  hash: string;
  parentHash: string;
  txs: 2,
  timestamp: string;
}

export type BlocksState = {
  loading: boolean;
  exists: boolean;
  hasNextPage: boolean;
  isNextPageLoading: boolean;
  rawDataTotal: number;
  items: BlockType[];
}

export type ItemType = Override<BlockType, { leader: AvatarName }>
