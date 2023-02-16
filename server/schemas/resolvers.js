const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    searchUsers: async (_parent, args) => {
      const search = args.term;
      const rgx = (pattern) => new RegExp(`.*${pattern}.*`);
      const searchRgx = rgx(search);
      return User.find({
        $or: [
          {
            email: {
              $regex: searchRgx,
              $options: 'i',
            },
          },
          {
            username: {
              $regex: searchRgx,
              $options: 'i',
            }
          },
        ]
      });
    },
    users: async () => {
      return User.find();
    },
    user: async (_, args,context) => {
      if(!context.user) throw new AuthenticationError('You must be logged in to view your stocks');
      return User.findOne({ _id: context.user._id });
    },
    me: async (_, _args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (_, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    login: async (_, { email, username, password }) => {
      const user = await User.findOne(email ? { email } : { username });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addStock: async (_parent, { userID, stockId, stockName, price, shares }, context) => {
        if (context.user) {
          return await User.findOneAndUpdate(
            { _id: context.user._id },
            { 
              $addToSet: { stocks : { stockId: stockId, stockName: stockName, price: price, shares: shares } }
             },
             {
              new: true
             }
          )
        }
        else {
          throw new AuthenticationError('You must be logged in to add a stock')
        }
    },
    removeStock: async (_parent, { userID, stockId }, context) => {
       //if (context.user) {
        return await User.findOneAndUpdate(
          { _id: userID },
          { $pull: { stocks : { stockId: stockId} } },
          {new: true }
        )
      //}
    }
}
}

module.exports = resolvers;
