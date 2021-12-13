import numeral from 'numeral';

export const formatMarket = (data: {
  marketCap: number;
  maxSupply: number;
  price: number;
  inflation: number;
}) => {
  const marketCap = data.marketCap !== null ? `$${numeral(data.marketCap).format('0,0.[00]')}` : 'N/A';
  return ([
    {
      key: 'marketCap',
      data: marketCap,
    },
    {
      key: 'maxSupply',
      data: data.maxSupply,
    },
    {
      key: 'price',
      data: `$${numeral(data.price).format('0,0.[00]')}`,
    },
    {
      key: 'inflation',
      data: data.inflation,
    },
  ]);
};
