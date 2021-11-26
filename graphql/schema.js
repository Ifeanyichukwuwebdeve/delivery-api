const { buildSchema } = require('graphql')

const auth = require('./schema/auth')
const parcel = require('./schema/parcel')

module.exports = buildSchema(`
  ${auth.User}
  ${auth.authData}
  ${parcel.Parcel}
  ${parcel.locations}

  ${auth.createUserInput}
  ${parcel.parcelInput}
  ${parcel.addParcelInput}

  type RootQuery {
    ${auth.users}
    ${auth.login}
    ${parcel.parcels}
    ${parcel.singleparcel}
  }
  type RootMutation {
    ${auth.userMutaion}
    ${parcel.addParcel}
    ${parcel.addLocationOfParcel}
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }
`)
