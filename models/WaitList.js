const mongoose = require('mongoose')
const Schema = mongoose.Schema

const waitListSchema = new Schema(
	{
		email: {
			type: String,
			required: true
		}
	},
	{ timestamps: true }
)

const waitList = mongoose.model('waitList', waitListSchema)
module.exports = waitList
