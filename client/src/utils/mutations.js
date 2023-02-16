import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_STOCK = gql`
mutation addStock($stockId: ID!, $stockName: String!, $price: String!, $shares: Int!) {
  addStock(stockId: $stockId, stockName: $stockName, price: $price, shares: $shares) {
    stocks {
      price
      shares
      stockId
      stockName
    }
    username
  }
}
`

export const REMOVE_STOCK = gql`
mutation removeStock($userID: ID!, $stockId: ID!) {
  removeStock(userID: $userID, stockId: $stockId) {
    username
    stocks {
      stockName
      stockId
      shares
      price
    }
    _id
  }
}
`