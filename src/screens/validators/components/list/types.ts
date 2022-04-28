export type SkipRateType = {
  skip: number;
  rate: number;
  total: number;
}

export type ValidatorType = {
  validator: string;
  commission: number;
  stake: number;
  stakePercent: number;
  lastVote: number;
  status: boolean;
  skipRate: SkipRateType;
}

export type ValidatorsState = {
  loading: boolean;
  exists: boolean;
  tab: number;
  sortKey: string;
  sortDirection: 'asc' | 'desc';
  votingPowerOverall: number;
  items: ValidatorType[];
}

export type ItemType = Override<ValidatorType, { validator: AvatarName }>;
