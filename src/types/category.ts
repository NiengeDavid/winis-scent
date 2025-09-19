export interface SanityImage {
  url: string;
  alt?: string;
}

export type Category = {
  _id: string;
  title: string;
  image: SanityImage;
};
