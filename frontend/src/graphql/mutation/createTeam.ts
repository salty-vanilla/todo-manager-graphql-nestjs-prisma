import { gql } from "@apollo/client";

export const createTeamMutation = gql`
mutation createTeam($input: TeamCreateInput!) {
  createTeam(teamCreateInput: $input) {
    id,
    name,
  }
}
`;
