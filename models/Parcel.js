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
				date: String,
				time: String
			}
		]
	},
	{ timestamps: true }
)

const user = mongoose.model('User', userSchema)
module.exports = user
