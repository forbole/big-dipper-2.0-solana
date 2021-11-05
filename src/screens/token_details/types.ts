export type OverviewType = {
  address: string;
  decimals: number;
  mintAuthority: string;
  freezeAuthority: string;
  officialSite: string;
}

export type Market = {

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
