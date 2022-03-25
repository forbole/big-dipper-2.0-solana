import { LogType } from '../../types';

export const splitLogsToSteps = (logs: LogType[]) => {
  const results = [];
  let currentStep = [];

  logs.forEach((x) => {
    if (x.includes('invoke')) { // start of a new step
      if (currentStep.length) {
        results.push(currentStep);
        currentStep = [];
      }
    }
    currentStep.push(x);
  });
  return results;
};
