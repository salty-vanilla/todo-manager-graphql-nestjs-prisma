import { gql } from "@apollo/client";

export const getUserQuery = gql`
query getUser($id: String!) {
  user(id: $id) {
    id,
    name,
    teams {
      id,
      name,
    },
  }
}
`;
