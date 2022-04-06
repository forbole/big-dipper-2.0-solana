import { InstructionBase } from '@models';
import axios from 'axios';
import * as R from 'ramda';
import { TokenAccountUnitDocument } from '@graphql/transaction_details_utils';

class TokenProgramTransferChecked extends InstructionBase {
  public mint: string;
  public source: string;
  public authority: string;
  public amount: string;
  public destination: string;
  public denom: string;
  public decimal: number;

  constructor(payload: any) {
    super(payload);
    this.mint = payload.mint;
    this.source = payload.source;
    this.authority = payload.authority;
    this.amount = payload.amount;
    this.destination = payload.destination;
    this.denom = payload.denom;
    this.decimal = payload.decimal;
  }

  public static async setExternalData(address: string): Promise<{
    denom: string;
    decimal: number;
  }> {
    const DEFAULT_RETURN_VALUE = {
      denom: '',
      decimal: 0,
    };

    try {
      const { data } = await axios.post(process.env.NEXT_PUBLIC_GRAPHQL_URL, {
        variables: {
          address,
        },
        query: TokenAccountUnitDocument,
      });
      return {
        denom: R.pathOr('', [
          'data', 'tokenAccount', 0, 'tokenUnit', 'unitName'], data),
        decimal: R.pathOr(0, [
          'data', 'tokenAccount', 0, 'tokenInfo', 'decimals',
        ], data),
      };
    } catch (error) {
      return DEFAULT_RETURN_VALUE;
    }
  }

  public static async fromJson(json: any) {
    const defaultItems = this.defaultFormat(json);
    const source = R.pathOr('', ['value', 'source'], json);
    const tokenUnitInfo = await TokenProgramTransferChecked.setExternalData(source);
    return new TokenProgramTransferChecked({
      ...defaultItems,
      ...tokenUnitInfo,
      source,
      mint: R.pathOr('', ['value', 'mint'], json),
      authority: R.pathOr('', ['value', 'authority'], json),
      amount: R.pathOr('', ['value', 'amount'], json),
      destination: R.pathOr('', ['value', 'destination'], json),
    });
  }
}

export default TokenProgramTransferChecked;
