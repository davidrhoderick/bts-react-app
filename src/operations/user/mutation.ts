import { graphql } from "../../generated/gql";

export const CREATE_USER_MUTATION = graphql(`
  mutation CreateUser($createUserInput: CreateUserInput) {
    createUser(createUserInput: $createUserInput) {
      name
      age
      id
    }
  }
`);
