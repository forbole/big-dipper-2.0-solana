export type OverviewType = {
  address: string;
  balance: TokenUnit;
  voter: string;
  withdrawer: string;
  lastTimestamp: string;
  commission: number;
  rootSlot: number;
}

export type VoteAccountState = {
  loading: boolean;
  overview: OverviewType;
}
