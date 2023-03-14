export const getUserQuery = /* GraphQL */ `
  query getUser {
    getUser {
      id
      name
      todos {
        id
        createdAt
        updatedAt
        title
        status
      }
    }
  }
`;
