export type OverviewType = {
  address: string;
  decimals: number;
  mintAuthority: string;
  freezeAuthority: string;
  officialSite: string;
}

export type MarketType = {
  price: number;
  marketCap: number;
  supply: number;
  holders: number;
  transactions: number;
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
