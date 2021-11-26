const { buildSchema } = require('graphql')

const auth = require('./schema/auth')
const parcel = require('./schema/parcel')

module.exports = buildSchema(`
  ${auth.User}
  ${auth.authData}
  ${parcel.Parcel}
  ${parcel.locations}

  ${auth.createUserInput}

  type RootQuery {
    ${auth.users}
    ${auth.login}
    ${parcel.parcels}
  }
  type RootMutation {
    ${auth.userMutaion}
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }
`)
