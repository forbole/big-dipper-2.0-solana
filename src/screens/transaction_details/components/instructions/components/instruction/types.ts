import { InstructionBase } from '@models';

export type InstructionState = {
  hide: boolean;
  raw: boolean;
}

export type ModelType = {
  type: string;
  model: typeof InstructionBase
}

export type ProgramInfoType = {
  [address: string]: {
    name: string;
    types: ModelType[];
  }
}
