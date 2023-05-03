import { gql } from "@apollo/client";

export const getProjectsQuery = gql`
query {
  projects {
    id
    name
    stories {
      name
    }
  }
}
`;
