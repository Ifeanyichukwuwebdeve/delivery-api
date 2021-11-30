exports.Parcel = `
  type Parcel {
    _id: ID!
    parcelName: String!
    transportMethod: String!
		deliveryDate: String!
		paymentMethod: String!
		insurance: String!
		weight: String!
		numberOfGoods: Int!
    locations: [Location!]
    senderInfo: SenderInfo!
    receiverInfo: ReceiverInfo!
    isDelivered: Boolean!
  }
`
exports.parcels = `
  parcels: [Parcel!]!
`

exports.singleparcel = `
  singleParcel(parcelId: ID!): Parcel
`

exports.parcelDelivered = `
  parcelDelivered(parcelId: ID!): Parcel
  `

exports.deleteParcel = `
  deleteParcel(parcelId: ID!): Parcel
  `

exports.senderInfo = `
  type SenderInfo {
    name: String!
    email: String!
    address: String!
    city: String!
    country: String!
    phone: String!
    postCode: String!
  }
`

exports.receiverInfo = `
  type ReceiverInfo {
    name: String!
    email: String!
    address: String!
    city: String!
    country: String!
    phone: String!
    postCode: String!
  }
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
    transportMethod: String!
		deliveryDate: String!
		paymentMethod: String!
		insurance: String!
		weight: String!
		numberOfGoods: Int!
    sendersName: String!
		sendersEmail: String!
		sendersAddress: String!
		sendersCity: String!
		sendersCountry: String!
		sendersPhone: String!
		sendersPostCode: String!
    recevicerName: String,
    recevicerEmail: String,
    recevicerAddress: String,
    recevicerCity: String,
    recevicerCountry: String,
    recevicerPhone: String,
    recevicerPostCode: String!
  }
`

exports.parcelInputUpdate = `
  input ParcelInputUpdate {
    parcelId: ID!
    parcelName: String!
    transportMethod: String!
		deliveryDate: String!
		paymentMethod: String!
		insurance: String!
		weight: String!
		numberOfGoods: Int!
  }
`

exports.updateSenderAndRecevicerInfoInput = `
  input UpdateSenderAndRecevicerInfo {
    parcelId: ID!
    sendersName: String!
		sendersEmail: String!
		sendersAddress: String!
		sendersCity: String!
		sendersCountry: String!
		sendersPhone: String!
		sendersPostCode: String!
    recevicerName: String,
    recevicerEmail: String,
    recevicerAddress: String,
    recevicerCity: String,
    recevicerCountry: String,
    recevicerPhone: String,
    recevicerPostCode: String!
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

exports.updateParcel = `
  updateParcel(parcelInputUpdate: ParcelInputUpdate!): Parcel!
`

exports.addLocationOfParcel = `
  addLocation(addParcelInput: AddParcelInput!): Parcel!
`

exports.updateSenderAndRecevicerInfo = `
  updateSenderAndRecevicerInfo(updateSenderAndRecevicerInfo: UpdateSenderAndRecevicerInfo!): Parcel!
`
