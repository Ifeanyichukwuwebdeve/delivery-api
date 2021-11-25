exports.Parcel = `
  type Parcel {
    _id: ID!
    parcelName: String!
    location: Location!
  }
`

exports.locations = `
  type Location [
    {
      location: String
			date: String
			time: String
    }
  ]
`
