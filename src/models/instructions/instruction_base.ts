import * as R from 'ramda';

// model to handle all unknown data
class InstructionBase {
  public type: string;
  public program: string;
  public rawData: string;
  public index: number;
  public innerIndex: number;
  public json: JSON;

  constructor(payload: any) {
    this.type = payload.type;
    this.program = payload.program;
    this.rawData = payload.rawData;
    this.index = payload.index;
    this.innerIndex = payload.innerIndex;
    this.json = payload.json;
  }

  static defaultFormat(json: any) {
    return ({
      type: R.pathOr('', ['type'], json),
      program: R.pathOr('', ['program'], json),
      rawData: R.pathOr('', ['raw_data'], json),
      index: R.pathOr('', ['index'], json),
      innerIndex: R.pathOr('', ['innerIndex'], json),
      json: R.pathOr(null, ['value'], json),
    });
  }

  static fromJson(json: any) {
    const defaultItems = this.defaultFormat(json);
    return new InstructionBase(defaultItems);
  }
}

export default InstructionBase;
