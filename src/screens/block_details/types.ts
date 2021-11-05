export type OverviewType = {
  slot: number;
  hash: string;
  leader: string;
  timestamp: string;
  parentSlot: number;
  parentHash: string;
  processedTx: number;
  successfulTx: number;
}

export type BlockDetailState = {
  loading: boolean;
  exists: boolean;
  overview: OverviewType;
  transactions: Transactions[];
}
