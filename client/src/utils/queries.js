import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query users {
    users {
      _id
      username
      email
    }
  }
`;

export const SEARCH_USERS = gql`
  query searchUsers($term: String!) {
    searchUsers(term: $term) {
      _id
      username
      email
    }
  }
`;

export const QUERY_USER = gql`
  query user {
    user {
      _id
      username
      email
    }
  }
`;

export const QUERY_USER_STOCKS = gql`
  query user {
    user {
      _id
      stocks {
        price
        shares
        stockId
        stockName
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
    }
  }
`;
