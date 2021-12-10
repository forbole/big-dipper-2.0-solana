export type TransactionType = {
  slot: number;
  hash: string;
  success: boolean;
  timestamp: string;
}

export type TransactionsState = {
  items: TransactionType[]
}
