import React from 'react';
import numeral from 'numeral';
import dayjs from '@utils/dayjs';
import Link from 'next/link';
import { getMiddleEllipsis } from '@utils/get_middle_ellipsis';
import {
  Divider, Typography,
} from '@material-ui/core';
import { BLOCK_DETAILS } from '@utils/go_to_page';
import {
  SingleBlockMobile, AvatarName,
} from '@components';
import { BlockListType } from '../../types';

const Mobile: React.FC<BlockListType & ComponentDefault> = (props) => {
  const formattedItems = props.items.map((x) => {
    return ({
      slot: (
        <Link href={BLOCK_DETAILS(x.slot)} passHref>
          <Typography variant="body1" className="value" component="a">
            {numeral(x.slot).format('0,0')}
          </Typography>
        </Link>
      ),
      txs: numeral(x.txs).format('0,0'),
      time: dayjs.utc(x.timestamp).fromNow(),
      leader: (
        <AvatarName
          address={x.leader.address}
          imageUrl={x.leader.imageUrl}
          name={x.leader.name}
        />
      ),
      hash: getMiddleEllipsis(x.hash, {
        beginning: 13, ending: 10,
      }),
    });
  });
  return (
    <div className={props.className}>
      {formattedItems.map((x, i) => {
        return (
          <React.Fragment key={`${x.hash}-${i}`}>
            <SingleBlockMobile {...x} />
            {i !== formattedItems.length - 1 && <Divider />}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Mobile;
