import { gql } from "@apollo/client";
export const GET_BLOGS_SEARCH = gql`
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
