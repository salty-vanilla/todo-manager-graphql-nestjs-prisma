export const createUserMutation = /* GraphQL */ `
  mutation createUser($id: String!, $input: UserInput!) {
    createUser(id: $id, input: $input) {
      id
    }
  }
`;
