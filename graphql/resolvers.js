const authResolver = require('./resolvers/auth')
const parcelResolver = require('./resolvers/parcel')

const rootResolver = {
	...authResolver,
	...parcelResolver
}

module.exports = rootResolver
