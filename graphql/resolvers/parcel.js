const Parcel = require('../../models/Parcel')
const { dateToString } = require('../../helpers/date')

module.exports = {
	parcels: async () => {
		try {
			const parcels = await Parcel.find()
			return parcels
		} catch (error) {
			throw error
		}
	},

	addParcel: async (args, req) => {
		try {
			const parcel = new Parcel({
				parcelName: args.parcelInput.parcelName
			})
			console.log(args.parcelInput)
			const savedParcel = await parcel.save()
			const location = {
				location: args.parcelInput.location,
				date: dateToString(args.parcelInput.date),
				time: args.parcelInput.time
			}
			savedParcel.locations.push(location)
			await savedParcel.save()
			return savedParcel
		} catch (error) {
			throw error
		}
	}
}
