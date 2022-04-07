export type AccountDetailState = {
  loading: boolean;
  exists: boolean;
  desmosProfile: DesmosProfile | null;
  accountType: string;
}
