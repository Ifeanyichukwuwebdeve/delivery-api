const DataLoader = require('dataloader')

const { dateToString } = require('../../helpers/date')

const checkEmail = (email) => {
	if (email === '') {
		throw new Error('Add email!')
	} else if (!isEmail(email)) {
		throw new Error('Use a valid email!')
	} else {
		return email
	}
}

const isEmail = (email) => {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
		email
	)
}

const populateParcel = (parcel) => {
	const result = {
		...parcel._doc,
		date: dateToString(parcel.locations.map((location) => location.date))
	}
	return result
}

module.exports = {
	checkEmail,
	populateParcel
}
