import { useEffect } from 'react';
import { resetToTopDesktop } from '@hooks';

export const useDesktop = (tab) => {
  const { resetDesktop } = resetToTopDesktop();

  useEffect(() => {
    resetDesktop();
  }, [tab]);
};
