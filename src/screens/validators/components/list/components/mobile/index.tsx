import React from 'react';
import classnames from 'classnames';
import numeral from 'numeral';
import { VariableSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import { Divider } from '@material-ui/core';
import { AvatarName } from '@components';
// import { getValidatorConditionClass } from '@utils/get_validator_condition';
import {
  useList,
  useListRow,
} from '@hooks';
import { SingleValidator } from './component';
// import {
//   Condition, SkipRate,
// } from '..';
import { ItemType } from '../../types';
import { useMobile } from './hooks';

const Mobile: React.FC<{
  className?: string;
  items: ItemType[];
  tab: number;
}> = ({
  className, items, tab,
}) => {
  const {
    listRef,
    getRowHeight,
    setRowHeight,
  } = useList();

  const formattedItems = items.map((x, i) => {
    // const condition = x.status === 3 ? getValidatorConditionClass(x.condition) : undefined;
    return ({
      idx: `#${i + 1}`,
      stake: `${numeral(x.stake).format('0,0')} (${numeral(x.stakePercent).format('0,0.00')}%)`,
      commission: `${x.commission}%`,
      lastVote: numeral(x.lastVote).format('0,0'),
      validator: (
        <AvatarName
          address={x.validator.address}
          imageUrl={x.validator.imageUrl}
          name={x.validator.name}
        />
      ),
      // condition: (
      //   <Condition className={condition} />
      // ),
      // skipRate: (
      //   <SkipRate
      //     percentage={x.skipPercent}
      //     content={`${x.skipRate} / ${x.skipTotal}`}
      //   />
      // ),
    });
  });

  useMobile(tab, listRef);

  return (
    <div className={classnames(className)}>
      <AutoSizer>
        {({
          height, width,
        }) => {
          return (
            <List
              className="List"
              height={height}
              itemCount={formattedItems.length}
              itemSize={getRowHeight}
              ref={listRef}
              width={width}
            >
              {({
                index, style,
              }) => {
                const { rowRef } = useListRow(index, setRowHeight);
                const selectedItem = formattedItems[index];
                return (
                  <div style={style}>
                    <div ref={rowRef}>
                      <SingleValidator {... selectedItem} />
                      {index !== formattedItems.length - 1 && <Divider />}
                    </div>
                  </div>
                );
              }}
            </List>
          );
        }}
      </AutoSizer>
    </div>
  );
};

export default Mobile;
