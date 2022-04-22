export type OverviewType = {
  address: string;
  balance: TokenUnit;
  voter: string;
  withdrawer: string;
}

export type ValidatorProfileType = {
  address: string;
  name: string;
  description: string;
  website: string;
  imageUrl: string;
  active: boolean;
  commission: number;
  lastVote: number;
  rootSlot: number;
}

export type VoteAccountState = {
  loading: boolean;
  overview: OverviewType;
  validatorProfile: ValidatorProfileType;
}
