export type OverviewType = {
  address: string;
}

export type NonceAccountState = {
  loading: boolean;
  exists: boolean;
  overview: OverviewType;
}
