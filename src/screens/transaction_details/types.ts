export type OverviewType = {
  slot: number;
  success: boolean;
  confirmations: string;
  fee: number;
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
