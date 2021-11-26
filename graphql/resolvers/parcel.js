const Parcel = require('../../models/Parcel')
const { populateParcel } = require('./merge')
const { dateToString } = require('../../helpers/date')
const parcel = require('../../models/Parcel')

module.exports = {
	parcels: async () => {
		try {
			const parcels = await Parcel.find()
			return parcels.map((parcel) => {
				return populateParcel(parcel)
			})
		} catch (error) {
			console.log(error)
			throw error
		}
	},

	singleParcel: async ({ parcelId }) => {
		try {
			const parcel = await Parcel.findById(parcelId)
			return populateParcel(parcel)
		} catch (error) {
			throw error
		}
	},

	addParcel: async (args, req) => {
		try {
			const parcel = new Parcel({
				parcelName: args.parcelInput.parcelName
			})
			const savedParcel = await parcel.save()
			const location = {
				location: args.parcelInput.location,
				date: dateToString(args.parcelInput.date),
				time: args.parcelInput.time
			}
			savedParcel.locations.push(location)
			await savedParcel.save()
			return populateParcel(savedParcel)
		} catch (error) {
			throw error
		}
	},

	addLocation: async (args) => {
		try {
			const parcel = await Parcel.findById(args.addParcelInput.parcelId)
			if (!parcel) throw new Error("Parcel don't exist")
			const location = {
				location: args.addParcelInput.location,
				date: dateToString(args.addParcelInput.date),
				time: args.addParcelInput.time
			}
			// console.log(parcel)
			parcel.locations.push(location)
			const result = await parcel.save()
			return populateParcel(result)
		} catch (error) {
			throw error
		}
	}
}
