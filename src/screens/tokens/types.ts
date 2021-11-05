export type TokenType = {
  token: string;
  price: number;
  change: number;
  volume: number;
  marketCap: number;
  holders: number;
  address: string;
}

export type TokensState = {
  loading: boolean;
  exists: boolean;
  hasNextPage: boolean;
  isNextPageLoading: boolean;
  rawDataTotal: number;
  items: TokenType[];
}
