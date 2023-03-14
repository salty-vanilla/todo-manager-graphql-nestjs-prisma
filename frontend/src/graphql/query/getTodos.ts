export const getTodosQuery = /* GraphQL */ `
  query getTodos {
    getTodos {
      id
      createdAt
      updatedAt
      title
      status
      user {
        id
        name
      }
      userId
    }
  }
`
