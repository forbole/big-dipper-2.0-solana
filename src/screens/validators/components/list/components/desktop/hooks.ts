import { useEffect } from 'react';

export const useDesktop = (tab: number, ref: any) => {
  // declare ref type as any because React.RefObject<unknown> shows folling error
  // Property 'scrollToItem' does not exist on type 'unknown'
  useEffect(() => {
    if (ref.current != null) {
      ref.current.scrollToItem({
        rowIndex: 0,
      });
    }
  }, [tab]);
};
