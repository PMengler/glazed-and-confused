import { gql } from '@apollo/client';

export const QUERY_CHECKOUT = gql`
  query getCheckout($donuts: [ID]!) {
    checkout(donuts: $donuts) {
      session
    }
  }
  `

export const QUERY_GET_DONUT = gql`
  query getDonut($id: ID!) {
    donut(_id: $id) {
      _id
      name
      description
      price
      image
      containItems {
        _id
      }
    }
  }
`
export const QUERY_GET_ALL_DONUTS = gql`
  query getDonuts {
    donuts {
      _id
      name
      description
      price
      image
      containItems {
        _id
      }
    }
  }
`

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      password
      orders {
        _id
        donuts {
          _id
          containItems {
            _id
          } 
        }
      }
    }
  }
`

export const QUERY_USERS = gql`
  query getUsers {
    users {
      _id
      username
      email
      password
      orders {
        _id
        donuts {
          _id
          containItems {
            _id
          }
        }
      }
    }
  }
`

export const QUERY_USER = gql`
  query getUser($id: ID!) {
    user(_id: $id) {
      _id
      email
      username
      password
      orders {
        _id
        donuts {
          _id
          containItems {
            _id
          }
        }
      }
    }
  }
`

export const QUERY_ORDERS = gql`
  query getOrders {
    orders {
      _id
      donuts {
        _id
        containItems {
          _id
        }
      }
    }
  }
`

export const QUERY_ORDER = gql`
  query getOrder($id: ID!) {
    order(_id: $id) {
      _id
      donuts {
        _id
      }
    }
  }
`