export type OverviewType = {
  slot: number;
  hash: string;
  proposer: string;
  timestamp: string;
  txs: number;
}

export type BlockDetailState = {
  loading: boolean;
  exists: boolean;
  overview: OverviewType;
  transactions: Transactions[];
}
