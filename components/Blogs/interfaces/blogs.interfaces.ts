export interface Blog {
  title: string;
  slug: string;
  createdAt: string;
  coverPhoto: Avatar;
  author: Author;
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
