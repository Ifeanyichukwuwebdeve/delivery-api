const express = require('express')
const expressPlayground =
	require('graphql-playground-middleware-express').default
const mongoose = require('mongoose')
require('dotenv').config()
const { graphqlHTTP } = require('express-graphql')

const graphQlSchema = require('./graphql/schema')
const graphQlResolvers = require('./graphql/resolvers')
const isAuth = require('./middleware/isAuth')

const app = express()

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*')
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST')
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
	if (req.method === 'OPTIONS') {
		return res.sendStatus(200)
	}
	next()
})

app.use(isAuth)

app.use(
	'/api',
	graphqlHTTP({
		schema: graphQlSchema,
		rootValue: graphQlResolvers
	})
)

app.get('/playground', expressPlayground({ endpoint: '/api' }))

app.get('/', (req, res, next) => {
	res.send('Welcome to our server')
})
const connect = process.env.MONGODB_CONNECT
const connectDB = async () => {
	try {
		const res = await mongoose.connect(connect, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useUnifiedTopology: true
		})
		console.log('Mongodb connected')
	} catch (error) {
		console.log(error)
		throw error
	}
}

const port = process.env.PORT || 8000

app.listen(port, connectDB)
