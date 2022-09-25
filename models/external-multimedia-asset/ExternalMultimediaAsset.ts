import { Option } from "rorjs";
import { ValueObject } from "../ddd/Entity";

interface Props {
  url: string;
  altTitle: Option<string>;
  caption: Option<string>;
}

interface CreateProps {
  url: string;
  altTitle: Option<string>;
  caption: Option<string>;
}

export class ExternalMultimediaAsset extends ValueObject<Props> {
  private constructor(props: Props) {
    super(props);
  }

  public get url() {
    return this.props.url;
  }

  public get altTitle() {
    return this.props.altTitle;
  }

  public get caption() {
    return this.props.caption;
  }

  public static create(props: CreateProps): ExternalMultimediaAsset {
    const vo = new this({
      url: props.url,
      altTitle: props.altTitle,
      caption: props.caption,
    });

    return vo;
  }
}
