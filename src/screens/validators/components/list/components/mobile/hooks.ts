import { useEffect } from 'react';
import { resetToTop } from '@hooks';

export const useMobile = (tab, listRef) => {
  const { resetMobile } = resetToTop();

  useEffect(() => {
    resetMobile(listRef);
  }, [tab]);
};
