const mongoose = require('mongoose')
const Schema = mongoose.Schema

const riderSchema = new Schema(
	{
    vehcileType: String,
    plateNum: String,
		verifiedNIN: false,
    verifiedLincence: false,
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
	},
	{ timestamps: true }
)

const rider = mongoose.model('Rider', riderSchema)
module.exports = rider
