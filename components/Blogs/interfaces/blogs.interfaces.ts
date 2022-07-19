export interface Blog {
  title: string;
  slug: string;
  createdAt: string;
  coverPhoto: Avatar;
  author: Author;
  content: Content;
}

export interface Content {
  __typename: string;
  raw: Raw;
}
export interface Raw {
  children: any;
}
// interface InRaw {
//   type: string;
//   children: { text: string };
// }

export interface Author {
  __typename: string;
  name: string;
  avatar: Avatar;
}
interface Avatar {
  __typename: string;
  url: string;
}
