import { StakeType } from '../../../../types';

export type ItemType = Override<StakeType, {
  delegator: AvatarName,
  to:AvatarName,
  from: AvatarName
}>
