import { InstructionBase } from '@models';

export type InstructionState = {
  hide: boolean;
  raw: boolean;
}

export type ReturnModelType = {
  type: string;
  model: typeof InstructionBase;
}
