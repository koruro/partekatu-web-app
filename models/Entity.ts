import { Id } from "./Id";

export abstract class Entity<T> {
	public readonly props: T;
	private _id?: Id;

	constructor(props: T, id?: Id) {
		this.props = props;
		this._id = id;
	}

	public getId() {
		return this._id;
	}

	public equals(entity: Entity<T>) {
		if (!entity) return false;
		if (!entity.getId() || !this.getId()) return false;
		return this.getId()!.equals(entity.getId()!);
	}
}

export abstract class ValueObject<T> {
	public readonly props: T;

	constructor(props: T) {
		this.props = Object.freeze(props);
	}
}
