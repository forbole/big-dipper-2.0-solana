export const columns:{
  key: string;
  align?: 'left' | 'center' | 'right' | 'justify' | 'inherit';
  width: number;
  component?: React.ReactNode;
  sortKey?: string;
  sort?: boolean;
}[] = [
  {
    key: 'idx',
    width: 15,
  },
  {
    key: 'token',
    width: 35,
    sort: true,
    sortKey: 'token',
  },
  {
    key: 'price',
    width: 25,
    align: 'right',
    sort: true,
    sortKey: 'price',
  },
  {
    key: 'marketCap',
    align: 'right',
    width: 25,
    sort: true,
    sortKey: 'marketCap',
  },
];
