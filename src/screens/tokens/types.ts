export type TokenType = {
  token: string;
  address: string;
  price?: number;
  marketCap?: number;
}

export type TokensState = {
  loading: boolean;
  exists: boolean;
  hasNextPage: boolean;
  isNextPageLoading: boolean;
  items: TokenType[];
}
