import { gql } from "@apollo/client";

export const CREATE_MEMBERSHIP = gql`
  mutation ($createMembership: CreateMembershipInput!) {
    createMembership(createMembership: $createMembership) {
      status
    }
  }
`;
