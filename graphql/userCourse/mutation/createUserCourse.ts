import { gql } from "@apollo/client";

export const CREATE_USER_COURSE = gql`
  mutation ($createUserCourseInput: CreateUserCourseInput!) {
    createUserCourse(createUserCourseInput: $createUserCourseInput) {
      status
    }
  }
`;
