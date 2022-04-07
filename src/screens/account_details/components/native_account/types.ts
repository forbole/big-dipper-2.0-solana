export type OverviewType = {
  address: string;
}

export type NativeAccountState = {
  loading: boolean;
  exists: boolean;
  overview: OverviewType;
}
