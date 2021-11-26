exports.Parcel = `
  type Parcel {
    _id: ID!
    parcelName: String!
    location: Location!
    isDelivered: Boolean!
  }
`
exports.parcels = `
  parcels: [Parcel!]!
`

exports.locations = `
  type Location {
    location: [
      {
        location: String!
        date: String!
        time: String!
      }
    ]
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

exports.addedParcel = `
  addedParcel(parcelInput: ParcelInput): Parcel!
`
