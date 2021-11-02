export type TransactionType = {
  slot: number;
  signature: string;
  success: boolean;
  timestamp: string;
  messages: number;
}

export type TransactionsState = {
  items: TransactionType[]
}
