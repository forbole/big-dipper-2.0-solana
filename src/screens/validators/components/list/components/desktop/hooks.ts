import { useEffect } from 'react';
import {
  resetToTopDesktop,
} from '@hooks';

export const useDesktop = () => {
  useEffect(() => {
    resetToTopDesktop();
  }, []);
};
