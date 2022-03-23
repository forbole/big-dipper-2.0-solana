import React from 'react';
import classnames from 'classnames';
import dynamic from 'next/dynamic';
import {
  Box,
  NoData,
  LoadAndExist,
  TabPanel,
} from '@components';
import { useScreenSize } from '@hooks';
import {
  useProfilesRecoil,
} from '@recoil/profiles';
import numeral from 'numeral';
import { Tabs } from './components';
import { useStyles } from './styles';
import { useValidators } from './hooks';

const Desktop = dynamic(() => import('./components/desktop'));
const Mobile = dynamic(() => import('./components/mobile'));

const List: React.FC<{
  className?: string;
}> = ({ className }) => {
  const { isDesktop } = useScreenSize();
  const classes = useStyles();
  const {
    state,
    handleTabChange,
    handleSearch,
    handleSort,
    sortItems,
  } = useValidators();
  const dataProfiles = useProfilesRecoil(state.items.map((x) => x.validator));

  const mergedDataWithProfiles = state.items.map((x, i) => {
    return ({
      ...x,
      validator: dataProfiles[i],
    });
  });
  const items = sortItems(mergedDataWithProfiles);

  const activeTotal = mergedDataWithProfiles.filter((x) => x.status === true).length;
  const deliquentTotal = mergedDataWithProfiles.filter((x) => x.status === false).length;
  const total = dataProfiles.length;
  const validatorCount = [
    numeral(activeTotal).format('0,0'),
    numeral(deliquentTotal).format('0,0'),
    numeral(total).format('0,0'),
  ];

  return (
    <LoadAndExist
      loading={state.loading}
      exists={state.exists}
    >
      <Box className={classnames(className)}>
        <Tabs
          tab={state.tab}
          handleTabChange={handleTabChange}
          handleSearch={handleSearch}
          validatorCount={validatorCount}
        />
        <TabPanel value={state.tab} index={0}>
          <div className={classes.list}>
            {items.length ? (
              <>
                {isDesktop ? (
                  <Desktop
                    className={classes.desktop}
                    sortDirection={state.sortDirection}
                    sortKey={state.sortKey}
                    handleSort={handleSort}
                    items={items}
                  />
                ) : (
                  <Mobile
                    className={classes.mobile}
                    items={items}
                  />
                )}
              </>
            ) : (
              <NoData />
            )}
          </div>
        </TabPanel>
        <TabPanel value={state.tab} index={1}>
          <div className={classes.list}>
            {items.length ? (
              <>
                {isDesktop ? (
                  <Desktop
                    className={classes.desktop}
                    sortDirection={state.sortDirection}
                    sortKey={state.sortKey}
                    handleSort={handleSort}
                    items={items}
                  />
                ) : (
                  <Mobile
                    className={classes.mobile}
                    items={items}
                  />
                )}
              </>
            ) : (
              <NoData />
            )}
          </div>
        </TabPanel>
        <TabPanel value={state.tab} index={2}>
          <div className={classes.list}>
            {items.length ? (
              <>
                {isDesktop ? (
                  <Desktop
                    className={classes.desktop}
                    sortDirection={state.sortDirection}
                    sortKey={state.sortKey}
                    handleSort={handleSort}
                    items={items}
                  />
                ) : (
                  <Mobile
                    className={classes.mobile}
                    items={items}
                  />
                )}
              </>
            ) : (
              <NoData />
            )}
          </div>
        </TabPanel>
      </Box>
    </LoadAndExist>
  );
};

export default List;
