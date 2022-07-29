import { gql } from "@apollo/client";

export const GET_BLOGS = gql`
  query getPosts($searchValue: String) {
    posts(orderBy: createdAt_DESC, where: { title_contains: $searchValue }) {
      id
      title
      slug
      createdAt
      coverPhoto {
        url
      }
      author {
        name
        avatar {
          url
        }
      }
      content {
        html
      }
    }
  }
`;

export const GET_BLOGS_FILTER = gql`
  query getPostsFilter($filter: String) {
    posts(orderBy: createdAt_DESC, where: { category: $filter }) {
      id
      title
      category
      slug
      createdAt
      coverPhoto {
        url
      }
      author {
        name
        avatar {
          url
        }
      }
      content {
        html
      }
    }
  }
`;
