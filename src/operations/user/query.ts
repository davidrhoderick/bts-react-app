import { graphql } from "../../generated/gql";

export const GET_USER_QUERY = graphql(`
  query getUser($id: String!) {
    getUser(id: $id) {
      name
      age
      id
    }
  }
`);
