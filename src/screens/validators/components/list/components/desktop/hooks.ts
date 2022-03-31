import { useEffect } from 'react';
import { resetToTop } from '@hooks';

export const useDesktop = (tab, gridRef) => {
  const { resetDesktop } = resetToTop();

  useEffect(() => {
    resetDesktop(gridRef);
  }, [tab]);
};
