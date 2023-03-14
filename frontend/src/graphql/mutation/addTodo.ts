export const addTodoMutation = /* GraphQL */ `
  mutation addTodo($input: AddTodoInput!) {
    addTodo(input: $input) {
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
