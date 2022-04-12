export type OverviewType = {
  address: string;
  mint: string;
  balance: TokenUnit;
  owner: string;
}

export type NonceAccountState = {
  loading: boolean;
  overview: OverviewType;
}
