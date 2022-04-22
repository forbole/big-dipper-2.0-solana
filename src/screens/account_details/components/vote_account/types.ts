export type OverviewType = {
  address: string;
  balance: TokenUnit;
  voter: string;
  withdrawer: string;
  lastVote: number;
  commission: number;
  rootSlot: number;
}

export type VoteAccountState = {
  loading: boolean;
  overview: OverviewType;
}
