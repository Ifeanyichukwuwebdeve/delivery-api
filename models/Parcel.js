const mongoose = require('mongoose')
const Schema = mongoose.Schema

const parcelSchema = new Schema(
	{
		parcelName: {
			type: String,
			required: true
		},
		transportMethod: String,
		deliveryDate: String,
		paymentMethod: String,
		insurance: String,
		weight: String,
		numberOfGoods: Number,
		locations: [
			{
				location: String,
				date: String,
				time: String
			}
		],
		senderInfo: {
			name: String,
			email: String,
			address: String,
			city: String,
			country: String,
			phone: String,
			postCode: Number
		},
		receiverInfo: {
			name: String,
			email: String,
			phone: String,
			address: String,
			city: String,
			country: String,
			postCode: Number
		},
		isDelivered: {
			type: Boolean,
			default: false
		}
	},
	{ timestamps: true }
)

const parcel = mongoose.model('Parcel', parcelSchema)
module.exports = parcel
