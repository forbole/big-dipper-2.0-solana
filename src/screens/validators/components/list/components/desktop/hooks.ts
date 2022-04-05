import { useEffect } from 'react';
import { useGrid } from '@hooks';

export const useDesktop = (tab, gridRef) => {
  const { resetDesktop } = useGrid(gridRef);

  useEffect(() => {
    resetDesktop(gridRef);
  }, [tab]);
};
