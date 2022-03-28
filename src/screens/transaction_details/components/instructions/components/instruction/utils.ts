import { InstructionType } from '../../../../types';

export const getParentInstructions = (instructions: InstructionType[]) => {
  const [parent] = instructions.filter((x) => x.innerIndex === 0);
  return parent || instructions[0];
};
