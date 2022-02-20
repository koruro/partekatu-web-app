import { isUndefinedOrNull } from "../utils/isUndefined";
import { ValueObject } from "./Entity";

interface LocaleProps {
	locale: string;
}

export class Locale extends ValueObject<LocaleProps> {
	private constructor(props: LocaleProps) {
		super(props);
	}

	public static create(props: LocaleProps) {
		if (isUndefinedOrNull(props.locale))
			throw new Error(`Locale must not be undefined or null`);
		const vo = new this({
			locale: props.locale,
		});

		return vo;
	}
}
