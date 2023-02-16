const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    stocks: [Stock]
  }

  type Stock {
    stockId: String
    stockName: String
    price: String
    shares: Int
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]!
    user: User
    searchUsers(term: String!): [User]!
    me: User
  }

  type Mutation {
    addUser(email:String!, username:String!, password:String!): Auth
    login(email:String!, password:String!): Auth
    addStock(stockId: ID!, stockName: String!, price: String!, shares: Int!): User
    removeStock(userID:ID!, stockId: ID!): User
  }
`;

module.exports = typeDefs;
