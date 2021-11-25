const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orgRidersSchema = new Schema(
	{
    orgName: String,
		verifiedNIN: false,
    vehciles: [
      {
        vehcileType: String,
        verifiedLincence: false,
        plateNum: String,
        phone: {
          type: Number,
          unique
        }
      }
    ],
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
	},
	{ timestamps: true }
)

const orgRiders = mongoose.model('OrgRiders', orgRidersSchema)
module.exports = orgRiders
