export type HeaderType = {
  token: string;
  mint: string;
  imageUrl: string;
}
export type OverviewType = {
  mint: string;
  decimals: number;
  mintAuthority: string;
  freezeAuthority: string;
}

export type MarketType = {
  price: number;
  marketCap: number;
  supply: number;
  holders: number;
}

export type HolderType = {
  address: string;
  quantity: number;
  percentage: number;
  value: number;
}

export type TokenDetailState = {
  loading: boolean;
  exists: boolean;
  header: HeaderType;
  overview: OverviewType;
  market: MarketType;
  holders: {
    hasNextPage: boolean;
    isNextPageLoading: boolean;
    offsetCount: number;
    data: HolderType[];
  };
  transactions: {
    hasNextPage: boolean;
    isNextPageLoading: boolean;
    offsetCount: number;
    data: Transactions[];
  };
}
