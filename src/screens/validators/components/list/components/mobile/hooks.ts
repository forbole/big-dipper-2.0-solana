import { useEffect } from 'react';
// import { resetToTop } from '@hooks';
import { useList } from '@hooks';

export const useMobile = (tab, listRef) => {
  // const { resetMobile } = resetToTop();
  const { resetMobile } = useList();

  useEffect(() => {
    resetMobile(listRef);
  }, [tab]);
};
