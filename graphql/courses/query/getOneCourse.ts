import { gql } from "@apollo/client";

export const GET_COURSE = gql`
  query ($id: String!) {
    course(id: $id) {
      title
      name
      # category
      details
      learn
      #       plans
      image
      trainer {
        image
        first_name
      }
    }
  }
`;
