export type BlockType = {
  slot: number;
  leader: any;
  hash: string;
  txs: number;
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

export type ItemType = BlockType
