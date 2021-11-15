import React from 'react';
import classnames from 'classnames';
import {
  Box,
  TabPanel,
} from '@components';
import {
  Tabs,
  TokensList,
} from './components';
import { useTokenssHook } from './hooks';
import { TokensType } from './types';

const Tokens: React.FC<TokensType & ComponentDefault> = (props) => {
  const {
    handleTabChange,
    tab,
  } = useTokenssHook();

  const tabs = [
    {
      id: 0,
      key: 'tokens',
      data: props.tokens,
      component: (
        <TokensList
          data={props.tokens}
          count={props.tokens.length}
        />
      ),
    },
    {
      id: 1,
      key: 'tokensTx',
      data: props.tokens,
      component: null,
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
            {x.component}
          </TabPanel>
        );
      })}
    </Box>
  );
};

export default Tokens;
