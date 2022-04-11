import React from 'react';
import classnames from 'classnames';
import {
  Box,
  TabPanel,
  Loading,
} from '@components';
import { useAccountsHook } from './hooks';
import {
  Tabs, List,
} from './components';

const Accounts: React.FC<ComponentDefault> = (props) => {
  const {
    handleTabChange,
    tab,
    state,
  } = useAccountsHook();
  const tabs = [
    {
      id: 0,
      key: 'accountStake',
      data: state.stake,
      count: state.stake.length,
    },
    {
      id: 1,
      key: 'accountVote',
      data: state.vote,
      count: state.vote.length,
    },
    {
      id: 2,
      key: 'accountNonce',
      data: state.nonce,
      count: state.nonce.length,
    },
    {
      id: 3,
      key: 'accountToken',
      data: state.token,
      count: state.token.length,
    },
  ];

  return (
    <Box className={classnames(props.className)}>
      {state.loading ? (
        <Loading />
      ) : (
        <>
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
        </>
      )}
    </Box>
  );
};

export default Accounts;
