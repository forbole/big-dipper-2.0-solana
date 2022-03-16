export type OverviewType = {
  slot: number;
  success: boolean;
  fee: TokenUnit;
  signature: string;
  timestamp: string;
}

export type TransactionState = {
  loading: boolean;
  exists: boolean;
  overview: OverviewType;
  messages: {
    filterBy: string;
    viewRaw: boolean;
    items: any[];
  }
}
