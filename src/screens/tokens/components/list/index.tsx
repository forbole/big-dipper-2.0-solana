import React from 'react';
import numeral from 'numeral';
import classnames from 'classnames';
import { useScreenSize } from '@hooks';
import {
  Box,
  NoData,
} from '@components';
import {
  Total,
  Mobile,
  Desktop,
} from './components';

import { useStyles } from './styles';
import { TokenType } from '../../types';

const TokensList: React.FC<{
  className?: string;
  items: TokenType[];
  isItemLoaded: (index: number) => boolean;
  itemCount: number;
  loadMoreItems: () => void;
}> = ({
  className,
  items,
  isItemLoaded,
  itemCount,
  loadMoreItems,
}) => {
  const classes = useStyles();
  const { isDesktop } = useScreenSize();

  return (
    <Box className={classnames(className, classes.root)}>
      <div className={classes.topContent}>
        <Total className={classes.total} total={numeral(items.length).format('0,0')} />
        {/* <Search className={classes.search} /> */}
      </div>
      <div className={classes.list}>
        {!items.length ? (
          <NoData />
        ) : (
          <>
            {isDesktop ? (
              <Desktop
                items={items}
                itemCount={itemCount}
                loadMoreItems={loadMoreItems}
                isItemLoaded={isItemLoaded}
              />
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
    </Box>
  );
};

export default TokensList;
