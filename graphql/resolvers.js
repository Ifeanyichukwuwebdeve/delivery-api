const authResolver = require('./resolvers/auth')

const rootResolver = {
  ...authResolver
}

module.exports = rootResolver
