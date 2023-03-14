export const updateTodoMutation = /* GraphQL */ `
  mutation updateTodo($id: Int!, $input: UpdateTodoInput!) {
    updateTodo(id: $id, input: $input) {
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
