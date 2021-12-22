export type BlockType = {
  slot: number;
  proposer: string;
  hash: string;
  txs: number;
  timestamp: string;
}

export type BlocksState = {
  items: BlockType[];
}

export type ItemType = Override<BlockType, { proposer: AvatarName }>
