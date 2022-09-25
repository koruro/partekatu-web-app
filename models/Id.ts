import { isNullOrUndefined } from "./../utils/isNullOrUndefined";

export type IdType = number | string;
export class Id {
  private readonly _value: IdType;

  constructor(value: IdType) {
    if (isNullOrUndefined(value))
      throw new Error(`Invalid Id value. Value cannot be undefined or null`);
    this._value = value;
  }

  public getValue() {
    return this._value;
  }

  public toString() {
    return `${this.getValue()}`;
  }

  public equals(id: Id) {
    if (!id) return false;
    return this.getValue() === id.getValue();
  }
}
