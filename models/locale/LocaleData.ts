import { isNullOrUndefined } from "../../utils/isNullOrUndefined";
import { ValueObject } from "../ddd/Entity";

interface LocaleProps {
  locale: string;
}

export class Locale extends ValueObject<LocaleProps> {
  private constructor(props: LocaleProps) {
    super(props);
  }

  get locale() {
    return this.props.locale;
  }

  public static create(props: LocaleProps) {
    if (isNullOrUndefined(props.locale))
      throw new Error(`Locale must not be undefined or null`);
    const vo = new this({
      locale: props.locale,
    });

    return vo;
  }
}
