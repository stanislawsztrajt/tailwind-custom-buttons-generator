import { gql } from "@apollo/client";

export const GET_COMPONENT: any = gql`
  query GetComponent($id: ID!) {
    component(id: $id) {
      data {
        id
        attributes {
          name
          description
          code
          defaultValue
        }
      }
    }
  }
`;
