import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation ($loginInput: LoginInput!) {
    login(loginInput: $loginInput) {
      refresh
      user {
        email
        first_name
        last_name
        user_id
      }
    }
  }
`;
