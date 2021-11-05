export type ValidatorType = {
  validator: string;
  stake: number;
  stakePercent: number;
  fee: number;
  lastVote: number;
  skipRate: number;
  skipTotal: number;
  skipPercent: number;
  condition: number;
  status: number;
  delegators: number;
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