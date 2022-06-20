import { gql } from "@apollo/client";

export const GET_COMPONENT = gql`
  query getComponent($id: ID!) {
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

export const GET_COMPONENTS = gql`
  query getComponents($limit: Int) {
    components(pagination: { limit: $limit }) {
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

export const GET_COMPONENTS_IDS = gql`
  query getComponents($limit: Int) {
    components(pagination: { limit: $limit }) {
      data {
        id
      }
    }
  }
`;

export const CREATE_COMPONENT = gql`
  mutation createComponent(
    $name: String!
    $description: String!
    $code: String!
    $defaultValue: JSON!
  ) {
    createComponent(
      data: { name: $name, description: $description, code: $code, defaultValue: $defaultValue }
    ) {
      data {
        id
      }
    }
  }
`;
