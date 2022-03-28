export type OverviewType = {
  slot: number;
  success: boolean;
  fee: TokenUnit;
  signature: string;
  timestamp: string;
}

export type LogType = string;

export type TransactionState = {
  loading: boolean;
  exists: boolean;
  overview: OverviewType;
  logs: LogType[];
}
