import { gql } from "@apollo/client";

export const getUserQuery = gql`
query getUser($id: String!) {
  user(id: $id) {
    id,
    name,
    teams {
      team {
        id,
        name,
      },
      role,
      color,
    },
  }
}
`;
