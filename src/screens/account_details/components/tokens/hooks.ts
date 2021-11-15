import { useState } from 'react';

export const useTokenssHook = () => {
  const [tab, setTab] = useState(0);

  const handleTabChange = (_event: any, newValue: number) => {
    setTab(newValue);
  };

  return {
    handleTabChange,
    tab,
  };
};
