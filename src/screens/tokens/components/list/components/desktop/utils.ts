export const columns:{
  key: string;
  align?: 'left' | 'center' | 'right' | 'justify' | 'inherit';
  width: number;
}[] = [
  {
    key: 'idx',
    width: 15,
  },
  {
    key: 'token',
    width: 35,
  },
  {
    key: 'price',
    width: 25,
    align: 'right',
  },
  {
    key: 'marketCap',
    align: 'right',
    width: 25,
  },
];
