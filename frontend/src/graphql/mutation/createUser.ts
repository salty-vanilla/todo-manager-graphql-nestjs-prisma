import { gql } from "@apollo/client";

export const createUserMutation = gql`
mutation createUser($input: UserCreateInput!) {
  createUser(createUserInput: $input) {
    id,
    name,
  }
}
`;
