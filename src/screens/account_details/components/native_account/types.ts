export type OverviewType = {
  address: string;
}

export type AccountType = {
  address: string;
}

export type AccountsType = {
  data: {
    [value:number]: AccountType[];
  };
  count: number;
  loading: boolean;
}

export type NativeAccountState = {
  loading: boolean;
  exists: boolean;
  overview: OverviewType;
}
