import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { BoxDetails } from '@components';
import { MarketType } from '../../types';

const Market: React.FC<MarketType & ComponentDefault> = (props, { className }) => {
  const { t } = useTranslation('tokens');

  return (
    <BoxDetails
      className={className}
      title={t('market')}
      details={[
        {
          label: t('price'),
          detail: props.price,
        },
        {
          label: t('marketCap'),
          detail: props.marketCap,
        },
        {
          label: t('supply'),
          detail: props.supply,
        },
        {
          label: t('holders'),
          detail: props.holders,
        },
        {
          label: t('transactions'),
          detail: props.transactions,
        },
      ]}
    />
  );
};

export default Market;
