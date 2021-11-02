export type BlockType = {
  slot: number;
  leader: string;
  hash: string;
  txs: number;
  timestamp: string;
}

export type BlocksState = {
  items: BlockType[];
}

export type ItemType = Override<BlockType, { leader: AvatarName }>
