import { LogType } from '../../types';

export const splitLogsToSteps = (logs: LogType[]) => {
  const results = [];
  let currentStep = [];

  logs.forEach((x) => {
    const keywords = x.split(' ');

    if (keywords.includes('invoke') && keywords.includes('[1]')) { // start of a new step
      if (currentStep.length) {
        results.push(currentStep);
        currentStep = [];
      }
    }
    currentStep.push(x);
  });
  return results;
};
