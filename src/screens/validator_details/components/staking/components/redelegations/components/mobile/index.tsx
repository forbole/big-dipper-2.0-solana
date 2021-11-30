import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import {
  Divider, Typography,
} from '@material-ui/core';
import { AvatarName } from '@components';
import { useStyles } from './styles';
import { ItemType } from '../../types';

const Mobile: React.FC<{
  className?: string;
  items: ItemType[];
}> = ({
  className, items,
}) => {
  const classes = useStyles();
  const { t } = useTranslation('validators');

  return (
    <div className={classnames(className)}>
      {items.map((x, i) => {
        return (
          <React.Fragment key={`votes-mobile-${i}`}>
            <div className={classes.list}>
              <div className={classes.item}>
                <Typography variant="h4" className="label">
                  {t('address')}
                </Typography>
                <AvatarName
                  address={x.delegator.address}
                  imageUrl={x.delegator.imageUrl}
                  name={x.delegator.name}
                />
              </div>
              <div className={classes.item}>
                <Typography variant="h4" className="label">
                  {t('from')}
                </Typography>
                <AvatarName
                  address={x.from.address}
                  imageUrl={x.from.imageUrl}
                  name={x.from.name}
                />
              </div>
              <div className={classes.item}>
                <Typography variant="h4" className="label">
                  {t('to')}
                </Typography>
                <AvatarName
                  address={x.to.address}
                  imageUrl={x.to.imageUrl}
                  name={x.to.name}
                />
              </div>
            </div>
            {i !== items.length - 1 && <Divider />}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Mobile;
