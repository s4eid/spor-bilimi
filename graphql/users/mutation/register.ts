import { gql } from "@apollo/client";

export const REGISTER = gql`
  mutation ($registerInput: RegisterInput!) {
    register(registerInput: $registerInput) {
      user{
email
      }
    }
  }
`;
