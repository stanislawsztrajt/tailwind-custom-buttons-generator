import { gql } from "@apollo/client";

export const GET_CUSTOM_BUTTON = gql`
  query getCustomButton($id: ID!) {
    customButton(id: $id) {
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

export const GET_CUSTOM_BUTTON_GENERATOR = gql`
  query getCustomButton($id: ID!) {
    customButton(id: $id) {
      data {
        id
        attributes {
          name
          code
          defaultValue
        }
      }
    }
  }
`;

export const GET_CUSTOM_BUTTON_BY_ID = gql`
  query getCustomButton($id: ID!) {
    customButton(id: $id) {
      data {
        id
        attributes {
          code
          defaultValue
        }
      }
    }
  }
`;

export const GET_CUSTOM_BUTTONS = gql`
  query getCustomButtons($limit: Int) {
    customButtons(pagination: { limit: $limit }) {
      data {
        id
        attributes {
          name
          description
          code
        }
      }
    }
  }
`;

export const GET_CUSTOM_BUTTONS_IDS = gql`
  query getCucstomButtons($limit: Int) {
    customButtons(pagination: { limit: $limit }) {
      data {
        id
      }
    }
  }
`;

export const GET_CUSTOM_BUTTONS_BY_SEARCH_VALUE = gql`
  query SearchCustomButtonsBySearchValue($searchValue: String!) {
    customButtons(
      filters: {
        or: [
          { name: { contains: $searchValue } }
          { description: { contains: $searchValue } }
        ]
      }
    ) {
      data {
        id
        attributes {
          name
          description
          code
        }
      }
    }
  }
`

export const CREATE_CUSTOM_BUTTON = gql`
  mutation createCustomButton(
    $name: String!
    $description: String!
    $code: String!
    $defaultValue: JSON!
  ) {
    createCustomButton(
      data: { name: $name, description: $description, code: $code, defaultValue: $defaultValue }
    ) {
      data {
        id
      }
    }
  }
`;
