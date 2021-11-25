
exports.User = `
  type User {
    _id: ID!
    name: String!
    email: String!
    isOperator: Boolean!
    isAdmin: Boolean!
  }
`
exports.authData = `
  type AuthData {
    userId: ID!
    token: String!
    password: String
    tokenExpiration: Int!
  }
`

exports.users = `
  users: [User!]!
`

exports.login = `
  login(email: String!, password: String!): AuthData
`

exports.createUserInput = `
input UserInput {
  name: String!
  email: String!
  password: String!
}
`

exports.userMutaion = `
  createUser(userInput: UserInput): User
`