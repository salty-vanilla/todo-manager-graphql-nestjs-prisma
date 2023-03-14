export const deleteTodoMutation = /* GraphQL */ `
  mutation deleteTodo($id: Int!) {
    deleteTodo(id: $id) {
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
`;
