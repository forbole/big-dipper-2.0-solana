import { useState } from 'react';

export const useDataBlocks = () => {
  const [state, _setState] = useState<{
    latestSlot: number;
    averageSlotTime: number;
    price: number;
    validators: {
      active: number;
      total: number;
    }
  }>({
    latestSlot: 1000,
    averageSlotTime: 6.2,
    price: 5.66,
    validators: {
      active: 1000,
      total: 4200,
    },
  });

  return {
    state,
  };
};
