export type ValidatorType = {
  validator: string;
  commission: number;
  stake: number;
  stakePercent: number;
  lastVote: number;
  status: boolean;
  node: string;
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
