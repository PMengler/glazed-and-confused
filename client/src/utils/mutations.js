import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation AddUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        password
      }
    }
  }
`;

export const UPDATE_USER = gql``;

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const NEW_ORDER = gql`
  mutation NewOrder($donuts: [ID]!) {
    newOrder(donuts: $donuts) {
      _id
      donuts {
        _id
      }
    }
  }
`;

export const ADD_DONUT_TO_ORDER = gql`
  mutation AddDonutToOrder($donut: ID!, $order: ID!) {
    addDonutToOrder(donut: $donut, order: $order) {
      _id
      donuts {
        _id
      }
    }
  }
`;

export const REMOVE_DONUT_FROM_ORDER = gql`
  mutation RemoveDonutFromOrder($donut: ID!, $order: ID!) {
    removeDonutFromOrder(donut: $donut, order: $order) {
      _id
      donuts {
        _id
      }
    }
  }
`;
