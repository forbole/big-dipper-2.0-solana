export type BlockType = {
  slot: number;
  hash: string;
  txs: number;
  timestamp: string;
  leader: any;
}

export type BlocksState = {
  items: BlockType[];
}

export type ItemType = BlockType
