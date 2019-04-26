// @flow
import fetch from 'node-fetch';
import {makeExecutableSchema} from 'graphql-tools';

const typeDefs = `
  # Represents a HNPWA API FeedItem
  type Item {
    comments_count: Int!,
    domain: String,
    id: Int!,
    points: Int,
    time: Int!,
    time_ago: String!,
    title: String!,
    type: String!,
    url: String,
    user: String,
  }

  # Query returns an Array of FeedItem based on the provided String topic
  type Query {
    Items(page: String!, topic: String!): [Item!]
  }

`;
const resolvers = {
  Query: {
    Items: (parent, args) => {
      const {page, topic} = args;
      return fetch(`https://api.hnpwa.com/v0/${topic}/${page}.json`).then(res =>
        res.json()
      );
    },
  },
};
const HNSchema = makeExecutableSchema({
  resolvers,
  typeDefs,
});

export default HNSchema;
