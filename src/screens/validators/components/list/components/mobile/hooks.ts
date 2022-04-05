import { useEffect } from 'react';
import { useList } from '@hooks';

export const useMobile = (tab:number, listRef) => {
  const { resetMobile } = useList();

  useEffect(() => {
    resetMobile(listRef);
  }, [tab]);
};
