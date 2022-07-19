import { gql } from "@apollo/client";

export const GET_BLOG = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      slug
      createdAt
      category
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
