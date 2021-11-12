import React from 'react';
import classnames from 'classnames';
import {
  Box,
  TabPanel,
} from '@components';
import { useAccountsHook } from './hooks';
import {
  Tabs, List,
} from './components';
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
      data: props.stake,
      count: props.stake.length,
    },
    {
      id: 1,
      key: 'accountVote',
      data: props.vote,
      count: props.vote.length,
    },
    {
      id: 2,
      key: 'accountNonce',
      data: props.nonce,
      count: props.nonce.length,
    },
    {
      id: 3,
      key: 'accountToken',
      data: props.token,
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
      {tabs.map((x) => {
        return (
          <TabPanel
            key={x.id}
            index={x.id}
            value={tab}
          >
            <List
              data={x.data}
              count={x.count}
            />
          </TabPanel>
        );
      })}
    </Box>
  );
};

export default Accounts;
