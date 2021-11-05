import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import {
  Loading, AvatarName,
} from '@components';
import {
  Typography, Divider,
} from '@material-ui/core';
import { VariableSizeList as List } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import AutoSizer from 'react-virtualized-auto-sizer';
import { mergeRefs } from '@utils/merge_refs';
import {
  useList,
  useListRow,
} from '@hooks';
import { useStyles } from './styles';
import { ItemType } from '../../types';
import { StackBar } from '..';

const Mobile: React.FC<{
  className?: string;
  items: ItemType[];
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
  const { t } = useTranslation('tokens');
  const {
    listRef,
    getRowHeight,
    setRowHeight,
  } = useList();

  const formattedItems = items.map((x, i) => {
    return ({
      rank: `# ${i + 1}`,
      address: (
        <AvatarName
          name={x.address.name}
          address={x.address.address}
          imageUrl={x.address.imageUrl}
        />
      ),
      quantity: x.quantity,
      percentage: (
        <StackBar percentage={x.percentage} />
      ),
      value: x.value,
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
                          <div className={classes.list}>
                            <div className={classes.item}>
                              <Typography variant="h4" className="label">
                                {t('rank')}
                              </Typography>
                              <Typography variant="body1" className="value">
                                {item.rank}
                              </Typography>
                            </div>
                            <div className={classes.item}>
                              <Typography variant="h4" className="label">
                                {t('address')}
                              </Typography>
                              {item.address}
                            </div>
                            <div className={classes.item}>
                              <Typography variant="h4" className="label">
                                {t('quantity')}
                              </Typography>
                              <Typography variant="body1" className="value">
                                {item.quantity}
                              </Typography>
                            </div>
                            <div className={classes.item}>
                              <Typography variant="h4" className="label">
                                {t('percentage')}
                              </Typography>
                              {item.percentage}
                            </div>
                            <div className={classes.item}>
                              <Typography variant="h4" className="label">
                                {t('value')}
                              </Typography>
                              <Typography variant="body1" className="value">
                                {item.value}
                              </Typography>
                            </div>
                          </div>
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
