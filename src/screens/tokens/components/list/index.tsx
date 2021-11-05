import React from 'react';
import numeral from 'numeral';
import classnames from 'classnames';
import Link from 'next/link';
import { mergeRefs } from '@utils/merge_refs';
import {
  Typography, Divider,
} from '@material-ui/core';
import { VariableSizeList as List } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import AutoSizer from 'react-virtualized-auto-sizer';

import { TOKEN_DETAILS } from '@utils/go_to_page';
import {
  useList,
  useListRow,
  useScreenSize,
} from '@hooks';
import {
  LoadAndExist,
  Box,
  NoData,
} from '@components';
import {
  Total,
  Mobile,
} from './components';

import { useStyles } from './styles';
import { ProposalType } from '../../types';

const ProposalsList: React.FC<{
  className?: string;
  items: ProposalType[];
  rawDataTotal: number;
  isItemLoaded: (index: number) => boolean;
  itemCount: number;
  loadMoreItems: () => void;
}> = ({
  className,
  items,
  rawDataTotal,
  isItemLoaded,
  itemCount,
  loadMoreItems,
}) => {
  const classes = useStyles();
  const { isDesktop } = useScreenSize();

  const {
    listRef,
    getRowHeight,
    setRowHeight,
  } = useList();

  return (
    <Box className={classnames(className, classes.root)}>
      <div className={classes.topContent}>
        <Total className={classes.total} total={numeral(rawDataTotal).format('0,0')} />
        {/* <Search className={classes.search} /> */}
      </div>
      <div className={classes.list}>
        {!items.length ? (
          <NoData />
        ) : (
          <>
            {isDesktop ? (
              <div>
                desktop
              </div>
            // <Desktop
            //   items={mergedDataWithProfiles}
            //   itemCount={itemCount}
            //   loadMoreItems={loadMoreItems}
            //   isItemLoaded={isItemLoaded}
            // />
            ) : (
              <Mobile
                items={items}
                itemCount={itemCount}
                loadMoreItems={loadMoreItems}
                isItemLoaded={isItemLoaded}
              />
            )}
          </>
        )}
      </div>
      {/* <div className={classes.list}>
        <AutoSizer>
          {({
            height, width,
          }) => {
            return (
              <InfiniteLoader
                isItemLoaded={isItemLoaded}
                itemCount={itemCount}
                loadMoreItems={loadMoreItems}
              >
                {({
                  onItemsRendered, ref,
                }) => (
                  <List
                    className="List"
                    height={height}
                    itemCount={itemCount}
                    itemSize={getRowHeight}
                    onItemsRendered={onItemsRendered}
                    ref={mergeRefs(listRef, ref)}
                    width={width}
                  >
                    {({
                      index, style,
                    }) => {
                      const { rowRef } = useListRow(index, setRowHeight);
                      if (!isItemLoaded(index)) {
                        return (
                          <div style={style}>
                            <div ref={rowRef}>
                              <Loading />
                            </div>
                          </div>
                        );
                      }
                      const item = formattedItems[index];
                      return (
                        <div style={style}>
                          <div ref={rowRef}>
                            <SingleProposal {...item} />
                            {index !== itemCount - 1 && <Divider />}
                          </div>
                        </div>
                      );
                    }}
                  </List>
                )}
              </InfiniteLoader>
            );
          }}
        </AutoSizer>

      </div> */}
    </Box>
  );
};

export default ProposalsList;
