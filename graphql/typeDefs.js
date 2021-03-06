const { gql } = require('apollo-server');

module.exports = gql`
    type Post{
        id: ID!
        body: String!
        createdAt: String!
        username: String!
    }
    type User {
        id: ID!
        email: String!
        username: String!
        token: String!
        createdAt: String!
    }
    type RegisterInput {
        username: String!,
        password: String!,
        confirmPassword: String!,
        email: String!
    }
    type Query {
        getPosts: [Post]
    }
    type Mutation {
        register(registerInput: RegisterInput): User!
    }
`;