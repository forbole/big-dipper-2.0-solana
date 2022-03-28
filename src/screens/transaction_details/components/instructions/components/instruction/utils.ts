import * as MODELS from '@models';
import { InstructionType } from '../../../../types';
import { ReturnModelType } from './types';

export const formatInstructions = (instructions: InstructionType[]) => {
  return instructions.map((x) => {
    return formatInstructionToModel(x);
  });
};

export const formatInstructionToModel = (instruction: InstructionType) => {
  const models = getModelsByProgram(instruction.program);
  const model = getModelByType(models)(instruction.type);
  return model.fromJson(instruction);
};

export const getModelsByProgram = (program: string): ReturnModelType[] => {
  if (program === 'xx') {
    return [];
  }
  return []; // default if no programs exist
};

export const getModelByType = (
  models: ReturnModelType[],
) => (type: string): typeof MODELS.InstructionBase => {
  const [selectedModel] = models.filter((x) => x.type === type);
  return selectedModel.model || MODELS.InstructionUnknown;
};
