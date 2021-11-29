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
				parcelName: args.parcelInput.parcelName,
				transportMethod: args.parcelInput.transportMethod,
				deliveryDate: args.parcelInput.deliveryDate,
				paymentMethod: args.parcelInput.paymentMethod,
				insurance: args.parcelInput.insurance,
				weight: args.parcelInput.weight,
				numberOfGoods: args.parcelInput.numberOfGoods,
				senderInfo: {
					name: args.parcelInput.sendersName,
					email: args.parcelInput.sendersEmail,
					address: args.parcelInput.sendersAddress,
					city: args.parcelInput.sendersCity,
					country: args.parcelInput.sendersCountry,
					phone: args.parcelInput.sendersPhone,
					postCode: args.parcelInput.sendersPostCode
				},
				receiverInfo: {
					name: args.parcelInput.recevicerName,
					email: args.parcelInput.recevicerEmail,
					address: args.parcelInput.recevicerAddress,
					city: args.parcelInput.recevicerCity,
					country: args.parcelInput.recevicerCountry,
					phone: args.parcelInput.recevicerPhone,
					postCode: args.parcelInput.recevicerPostCode
				}
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
	},

	updateParcel: async (args, req) => {
		try {
			if (!req.isAuth) throw new Error('Not authorized')
			const parcel = await Parcel.findById(args.parcelInputUpdate.parcelId)
			if (!parcel) throw new Error("Parcel don't exist")
			parcel.parcelName = args.parcelInputUpdate.parcelName
			parcel.transportMethod = args.parcelInputUpdate.transportMethod
			parcel.deliveryDate = args.parcelInputUpdate.deliveryDate
			parcel.paymentMethod = args.parcelInputUpdate.paymentMethod
			parcel.insurance = args.parcelInputUpdate.insurance
			parcel.weight = args.parcelInputUpdate.weight
			parcel.numberOfGoods = args.parcelInputUpdate.numberOfGoods
			const result = await parcel.save()
			return result
		} catch (error) {
			throw error
		}
	},

	updateSenderAndRecevicerInfo: async (args, req) => {
		try {
			if (!req.isAuth) throw new Error('Not authorized')
			const parcel = await Parcel.findById(
				args.updateSenderAndRecevicerInfo.parcelId
			)
			if (!parcel) throw new Error("Parcel don't exist")
			parcel.senderInfo.name = args.updateSenderAndRecevicerInfo.sendersName
			parcel.senderInfo.email = args.updateSenderAndRecevicerInfo.sendersEmail
			parcel.senderInfo.address =
				args.updateSenderAndRecevicerInfo.sendersAddress
			parcel.senderInfo.city = args.updateSenderAndRecevicerInfo.sendersCity
			parcel.senderInfo.country =
				args.updateSenderAndRecevicerInfo.sendersCountry
			parcel.senderInfo.phone = args.updateSenderAndRecevicerInfo.sendersPhone
			parcel.senderInfo.postCode =
				args.updateSenderAndRecevicerInfo.sendersPostCode
			// Recever info
			parcel.receiverInfo.name = args.updateSenderAndRecevicerInfo.recevicerName
			parcel.receiverInfo.email =
				args.updateSenderAndRecevicerInfo.recevicerEmail
			parcel.receiverInfo.address =
				args.updateSenderAndRecevicerInfo.recevicerAddress
			parcel.receiverInfo.city = args.updateSenderAndRecevicerInfo.recevicerCity
			parcel.receiverInfo.country =
				args.updateSenderAndRecevicerInfo.recevicerCountry
			parcel.receiverInfo.phone =
				args.updateSenderAndRecevicerInfo.recevicerPhone
			parcel.receiverInfo.postCode =
				args.updateSenderAndRecevicerInfo.recevicerPostCode
			const result = await parcel.save()
			return result
		} catch (error) {
			throw error
		}
	}
}
