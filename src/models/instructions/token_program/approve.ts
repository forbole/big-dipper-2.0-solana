import { InstructionBase } from '@models';
import axios from 'axios';
import * as R from 'ramda';
import { TokenAccountUnitDocument } from '@graphql/transaction_details_utils';

class InstructionApprove extends InstructionBase {
  public source: string;
  public delegate: string;
  public amount: string;
  public owner: string;
  public unit: string;
  public decimal: number;

  constructor(payload: any) {
    super(payload);
    this.source = payload.source;
    this.delegate = payload.delegate;
    this.amount = payload.amount;
    this.owner = payload.owner;
    this.unit = payload.unit;
    this.decimal = payload.decimal;
  }

  public static async setExternalData(address: string): Promise<{
    unit: string;
    decimal: number;
  }> {
    const DEFAULT_RETURN_VALUE = {
      unit: '',
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
        unit: R.pathOr('', [
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
    const tokenUnitInfo = await InstructionApprove.setExternalData(source);
    return new InstructionApprove({
      ...defaultItems,
      ...tokenUnitInfo,
      source,
      delegate: R.pathOr('', ['value', 'delegate'], json),
      amount: R.pathOr('', ['value', 'amount'], json),
      owner: R.pathOr('', ['value', 'owner'], json),
    });
  }
}

export default InstructionApprove;
