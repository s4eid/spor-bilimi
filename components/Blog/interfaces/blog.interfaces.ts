export interface Blog {
  title: string;
  slug: string;
  createdAt: string;
  category: string;
  coverPhoto: Avatar;
  author: Author;
  content: Content;
}
export interface Content {
  __typename: string;
  html: any;
}

export interface Author {
  __typename: string;
  name: string;
  avatar: Avatar;
}
interface Avatar {
  __typename: string;
  url: string;
}
