const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema(
	{
		parcelName: {
			type: String,
			required: true
		},
		locations: [
			{
				location: String,
				date: Date,
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

const user = mongoose.model('User', userSchema)
module.exports = user
