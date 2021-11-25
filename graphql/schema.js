const { buildSchema } = require('graphql')

const auth = require('./schema/auth')

module.exports = buildSchema(`
  ${auth.User}
  ${auth.authData}

  ${auth.createUserInput}

  type RootQuery {
    ${auth.users}
    ${auth.login}
  }
  type RootMutation {
    ${auth.userMutaion}
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }
`)
