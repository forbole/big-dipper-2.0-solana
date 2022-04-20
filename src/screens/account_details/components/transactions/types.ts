export type TransactionsState = {
  loading: boolean;
  transactions: Transactions[];
  startSlot: number;
  endSlot: number;
  total: number;
}
