exports.Parcel = `
  type Parcel {
    _id: ID!
    parcelName: String!
    locations: [Location!]
    isDelivered: Boolean!
  }
`
exports.parcels = `
  parcels: [Parcel!]!
`

exports.singleparcel = `
  singleParcel(parcelId: ID!): Parcel
`

exports.locations = `
  type Location {
    _id: ID!
    location: String!
    date: String!
    time: String!
  }
`
exports.parcelInput = `
  input ParcelInput {
    parcelName: String!
    location: String!
    date: String!
    time: String!
  }
`

exports.addParcelInput = `
  input AddParcelInput {
    parcelId: ID!
    location: String!
    date: String!
    time: String!
  }
`

exports.addParcel = `
  addParcel(parcelInput: ParcelInput!): Parcel!
`

exports.addLocationOfParcel = `
  addLocation(addParcelInput: AddParcelInput!): Parcel!
`
