import { InstructionBase } from '@models';
import * as R from 'ramda';

class InstructionTransfer extends InstructionBase {
  public source: string;
  public destination: string;
  public lamports: number;

  constructor(payload: any) {
    super(payload);
    this.source = payload.source;
    this.destination = payload.destination;
    this.lamports = payload.lamports;
  }

  static fromJson(json: any) {
    const defaultItems = this.defaultFormat(json);
    return new InstructionTransfer({
      ...defaultItems,
      source: R.pathOr('', ['value', 'source'], json),
      destination: R.pathOr('', ['value', 'destination'], json),
      lamports: R.pathOr(0, ['value', 'lamports'], json),
    });
  }
}

export default InstructionTransfer;
