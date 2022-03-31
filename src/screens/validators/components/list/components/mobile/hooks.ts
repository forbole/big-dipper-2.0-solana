import { useEffect } from 'react';
import { useList } from '@hooks';

export const useMobile = (tab) => {
  const { resetToTop } = useList();

  useEffect(() => {
    resetToTop();
  }, [tab]);
};
