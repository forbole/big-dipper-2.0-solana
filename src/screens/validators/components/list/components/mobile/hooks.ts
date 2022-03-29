import { useEffect } from 'react';
import {
  useList,
} from '@hooks';

export const useMobile = () => {
  const { resetToTop } = useList();

  useEffect(() => {
    resetToTop();
  }, []);
};
