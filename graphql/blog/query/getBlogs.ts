import { gql } from "@apollo/client";

export const GET_BLOGS = gql`
  query {
    posts {
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
    }
  }
`;
