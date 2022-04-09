export type DataType = {
  address: string;
  amount: TokenUnit;
  value: number;
}

export type HoldersState = {
  loading: boolean;
  exists: boolean;
  data: DataType[];
}
