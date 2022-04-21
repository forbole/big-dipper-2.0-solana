export type OverviewType = {
  address: string;
  balance: TokenUnit;
  staker: string;
  withdrawer: string;
}

export type StakeInfoType = {
  delegated: TokenUnit;
  voteAddress: string;
  activationEpoch: number;
  deactivationEpoch: number;
}

export type StakeAccountState = {
  loading: boolean;
  overview: OverviewType;
  stakeInfo: StakeInfoType;
}
