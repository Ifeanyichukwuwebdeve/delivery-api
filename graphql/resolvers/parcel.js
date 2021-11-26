const Parcel = require('../../models/Parcel')
const { populateParcel } = require('./merge')
const { dateToString } = require('../../helpers/date')
const parcel = require('../../models/Parcel')

module.exports = {
	parcels: async (args, req) => {
		try {
			if (!req.isAuth) throw new Error('Not authorized')
			const parcels = await Parcel.find()
			return parcels
		} catch (error) {
			console.log(error)
			throw error
		}
	},

	singleParcel: async ({ parcelId }, req) => {
		try {
			if (!req.isAuth) throw new Error('Not authorized')
			const parcel = await Parcel.findById(parcelId)
			if (!parcel) throw new Error("Parcel don't exist")
			return parcel
		} catch (error) {
			throw error
		}
	},

	parcelDelivered: async ({ parcelId }, req) => {
		try {
			if (!req.isAuth) throw new Error('Not authorized')
			const parcel = await Parcel.findById(parcelId)
			if (!parcel) throw new Error("Parcel don't exist")
			parcel.isDelivered = true
			await parcel.save()
			return parcel
		} catch (error) {
			throw error
		}
	},

	addParcel: async (args, req) => {
		try {
			if (!req.isAuth) throw new Error('Not authorized')
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
			return savedParcel
		} catch (error) {
			throw error
		}
	},

	addLocation: async (args, req) => {
		try {
			if (!req.isAuth) throw new Error('Not authorized')
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
			return result
		} catch (error) {
			throw error
		}
	}
}
