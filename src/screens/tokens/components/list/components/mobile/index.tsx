import React from 'react';
import classnames from 'classnames';
import numeral from 'numeral';
import Link from 'next/link';
import { Loading } from '@components';
import {
  Typography, Divider,
} from '@material-ui/core';
import { VariableSizeList as List } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import AutoSizer from 'react-virtualized-auto-sizer';
import { TOKEN_DETAILS } from '@utils/go_to_page';
import { mergeRefs } from '@utils/merge_refs';
import {
  useList,
  useListRow,
} from '@hooks';
import { useStyles } from './styles';
import { TokenType } from '../../../../types';
import { Token } from './components';

const Mobile: React.FC<{
  className?: string;
  items: TokenType[];
  itemCount: number;
  loadMoreItems: (any) => void;
  isItemLoaded?: (index: number) => boolean;
}> = ({
  className,
  items,
  itemCount,
  loadMoreItems,
  isItemLoaded,
}) => {
  const classes = useStyles();

  const {
    listRef,
    getRowHeight,
    setRowHeight,
  } = useList();

  const formattedItems = items.map((x, i) => {
    return ({
      idx: `#${numeral(i + 1).format('0,0')}`,
      token: (
        <Link href={TOKEN_DETAILS(x.address)} passHref>
          <Typography variant="body1" className="value" component="a">
            {x.token}
          </Typography>
        </Link>
      ),
      price: `$${numeral(x.price).format('0,0.[00]')}`,
      change: (
        <Typography
          variant="body1"
          className={classnames('change', {
            positive: x.change > 0,
            negative: x.change < 0,
          })}
        >
          {x.change}
        </Typography>
      ),
      volume: `$${numeral(x.volume).format('0,0[00]')}`,
      marketCap: `$${numeral(x.marketCap).format('0,0[00]')}`,
      holders: numeral(x.holders).format('0,0'),
    });
  });

  return (
    <div className={classnames(className, classes.root)}>
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
                          <Token {...item} />
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
    </div>
  );
};

export default Mobile;
