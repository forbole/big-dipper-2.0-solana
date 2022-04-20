export type OverviewType = {
  address: string;
  balance: TokenUnit;
  staker: string;
  withdrawer: string;
}

export type StakeAccountState = {
  loading: boolean;
  overview: OverviewType;
}
