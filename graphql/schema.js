const { buildSchema } = require('graphql')

const auth = require('./schema/auth')
const parcel = require('./schema/parcel')

module.exports = buildSchema(`
  ${auth.User}
  ${auth.authData}
  ${parcel.Parcel}
  ${parcel.locations}
  ${parcel.senderInfo}
  ${parcel.receiverInfo}

  ${auth.createUserInput}
  ${parcel.parcelInput}
  ${parcel.addParcelInput}
  ${parcel.parcelInputUpdate}
  ${parcel.updateSenderAndRecevicerInfoInput}

  type RootQuery {
    ${auth.users}
    ${auth.login}
    ${parcel.parcels}
    ${parcel.singleparcel}
    ${parcel.parcelDelivered}
    ${parcel.deleteParcel}
  }
  type RootMutation {
    ${auth.userMutaion}
    ${parcel.addParcel}
    ${parcel.addLocationOfParcel}
    ${parcel.updateParcel}
    ${parcel.updateSenderAndRecevicerInfo}
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }
`)
