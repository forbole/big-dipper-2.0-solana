export const formatMarket = (data: {
  marketCap: number;
  maxSupply: number;
  price: number;
  inflation: number;
}) => {
  return ([
    {
      key: 'marketCap',
      data: data.marketCap,
    },
    {
      key: 'maxSupply',
      data: data.maxSupply,
    },
    {
      key: 'price',
      data: data.price,
    },
    {
      key: 'inflation',
      data: data.inflation,
    },
  ]);
};
