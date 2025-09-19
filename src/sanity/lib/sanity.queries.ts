import { groq } from "next-sanity";

// Base product fields
const blogFields = groq`
  _id,
  title,
  slug,
  "authorName": author->name,
  "mainImage": mainImage{
    "url": asset->url,
    "alt": alt
  },
  categories[]->{
    title
  },
  publishedAt,
  body
`;

//base book fields
const bookFields = groq`
  _id,
  title,
  slug,
  description,
  "mainImage": mainImage{
    "url": asset->url,
    "alt": alt
  },
  body
`;

export const getCategoryQuery = groq`
  *[_type == "category"] | order(_createdAt asc) {
    _id,
    title,
    "image": image{
      "url": asset->url,
      "alt": alt
    },
  }
`;

// Get all available blogs
export const getAllBlogsQuery = groq`
  *[_type == "blog"] | order(_createdAt desc) {
    ${blogFields}
  }
`;

// Get a single product by slug
export const getBlogBySlugQuery = groq`
  *[_type == "blog" && slug.current == $slug][0] {
    ${blogFields}
  }
`;

export interface SanityImage {
  url: string;
  alt?: string;
}

export interface Category {
  _id: string;
  title: string;
  image: SanityImage;
}

export interface Blog {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  authorName: string;
  mainImage: SanityImage;
  categories: {
    title: string;
  }[];
  publishedAt: string;
  body: Array<{
    _key: string;
    _type: string;
    children: Array<{
      _key: string;
      _type: string;
      marks: string[];
      text: string;
    }>;
    markDefs: Array<{
      _key: string;
      _type: string;
      href?: string;
    }>;
    style?: string;
    listItem?: string;
    level?: number;
  }>;
}
