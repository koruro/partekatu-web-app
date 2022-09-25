export interface Infographic {
  title: string;
  description?: string;
  file: {
    url: string;
    contentType: string;
    details: {
      size: number;
      image: {
        width: number;
        height: number;
      };
    };
  };
}
