export const columns:{
  key: string;
  align?: 'left' | 'center' | 'right' | 'justify' | 'inherit';
  width: number;
}[] = [
  {
    key: 'idx',
    width: 10,
  },
  {
    key: 'token',
    width: 20,
  },
  {
    key: 'price',
    width: 10,
    align: 'right',
  },
  {
    key: 'change',
    width: 15,
    align: 'right',
  },
  {
    key: 'volume',
    align: 'right',
    width: 15,
  },
  {
    key: 'marketCap',
    align: 'right',
    width: 15,
  },
  {
    key: 'holders',
    align: 'right',
    width: 15,
  },
];
