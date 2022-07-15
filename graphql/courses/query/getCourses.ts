import { gql } from "@apollo/client";

export const GET_COURSES = gql`
  query {
    courses {
      course_id
      name
      title
      image
    }
  }
`;
