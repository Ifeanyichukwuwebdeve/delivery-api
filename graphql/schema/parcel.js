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

exports.addParcel = `
  addParcel(parcelInput: ParcelInput): Parcel!
`
