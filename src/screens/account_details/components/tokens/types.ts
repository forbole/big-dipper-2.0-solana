export type TokenType = {
  token: string;
  amount: TokenUnit;
}

export type TokensState = {
  loading: boolean;
  tokens: TokenType[];
}
