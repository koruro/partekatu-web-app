import { Locale } from "../LocaleData";

export class LocaleMapper {
	public static serialize(locale: Locale) {
		return {
			locale: locale.props.locale,
		};
	}

	public static deserialize(locale: any): Locale {
		return Locale.create({
			locale: locale.locale,
		});
	}
}
