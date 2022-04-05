import { useEffect } from 'react';
import { useGrid } from '@hooks';

export const useDesktop = (tab:number, gridRef) => {
  const { resetDesktop } = useGrid(gridRef);

  useEffect(() => {
    resetDesktop(gridRef);
  }, [tab]);
};
