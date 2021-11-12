import React from 'react';
import classnames from 'classnames';
import {
  Box,
} from '@components';
import { useAccountsHook } from './hooks';
import { Tabs } from './components';
import { AccountsType } from './types';

const Accounts: React.FC<AccountsType & ComponentDefault> = (props) => {
  const {
    handleTabChange,
    tab,
  } = useAccountsHook();
  const tabs = [
    {
      id: 0,
      key: 'accountStake',
      count: props.stake.length,
    },
    {
      id: 1,
      key: 'accountVote',
      count: props.vote.length,
    },
    {
      id: 2,
      key: 'accountNonce',
      count: props.nonce.length,
    },
    {
      id: 3,
      key: 'accountToken',
      count: props.token.length,
    },
  ];

  return (
    <Box className={classnames(props.className)}>
      <Tabs
        tab={tab}
        handleTabChange={handleTabChange}
        tabs={tabs}
      />
    </Box>
  );
};

export default Accounts;
