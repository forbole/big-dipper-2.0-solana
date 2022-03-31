import { useEffect } from 'react';
import { resetToTopDesktop } from '@hooks';

export const useDesktop = (tab) => {
  useEffect(() => {
    resetToTopDesktop();
  }, [tab]);
};
