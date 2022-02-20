import { isUndefinedOrNull } from "./../utils/isUndefined";
export class Id {
	private readonly _value: number | string;

	constructor(value: number | string) {
		if (isUndefinedOrNull(value))
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
