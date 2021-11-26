const mongoose = require('mongoose')
const Schema = mongoose.Schema

const parcelSchema = new Schema(
	{
		parcelName: {
			type: String,
			required: true
		},
		locations: [
			{
				location: String,
				date: String,
				time: String
			}
		],
		isDelivered: {
			type: Boolean,
			default: false
		}
	},
	{ timestamps: true }
)

const parcel = mongoose.model('Parcel', parcelSchema)
module.exports = parcel
