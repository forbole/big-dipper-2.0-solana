import { LogType } from '../../types';

export const splitLogsToSteps = (logs: LogType[]) => {
  const results = [];
  let currentStep = [];

  logs.forEach((x, i) => {
    const keywords = x.split(' ');
    if (keywords.includes('invoke') && keywords.includes('[1]')) { // start of a new log
      if (currentStep.length) {
        results.push(currentStep);
        currentStep = [];
      }
    }
    currentStep.push(x);

    if (i === logs.length - 1 && currentStep.length) { // handle final log
      results.push(currentStep);
    }
  });
  return results;
};
